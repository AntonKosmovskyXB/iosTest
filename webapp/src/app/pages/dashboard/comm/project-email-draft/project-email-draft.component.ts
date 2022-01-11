import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NzModalService } from 'ng-zorro-antd'
import { jwtAuthService } from 'src/app/services/jwt'
import { MenuService } from 'src/app/services/menu'
import { StoreService } from 'src/app/services/store/store.service'
import { CkeditorComponent } from '../../common/ckeditor/ckeditor.component'
import { ICommEmailDraft, PatchDraftCmd } from '../../model/comm'
import { IContacts } from '../../model/contacts'

@Component({
  selector: 'app-project-email-draft',
  templateUrl: './project-email-draft.component.html',
})
export class ProjectEmailDraftComponent implements OnInit {
  @Input() isModalInput: boolean
  @Output() draftOuput = new EventEmitter()

  isRecipientModalVisible: boolean

  @ViewChild(CkeditorComponent) ckEditorComp: CkeditorComponent

  get from(): number {
    return 1
  }

  get cc(): number {
    return 2
  }

  form: FormGroup = new FormGroup({
    subject: new FormControl(),
    fromName: new FormControl(),
  })

  isPersonModalVisible = false
  contactType: number

  job: any
  commEmailDraft: ICommEmailDraft

  fromPage: number
  @Input() jobId: string

  emailDraft = this.store.EmailDraft

  constructor(
    private menuService: MenuService,
    private store: StoreService,
    private route: ActivatedRoute,
    private apiService: jwtAuthService,
    private modal: NzModalService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (!this.isModalInput) {
      this.fromPage = +this.route.snapshot.params['from']
      this.jobId = this.route.snapshot.params['jid']

      let menu = this.store.Breadcrumb
      const currentIndex = menu.findIndex(x => x.title == 'Details')
      if (currentIndex > 0) {
        menu = menu.splice(0, currentIndex)
      }
      menu.push({ icon: '', key: '', title: 'Details', url: '' })
      this.menuService.renderMenu({ breadcrumb: menu }, this.jobId ? false : true)
      this.apiService.SetBreadcrumb(
        menu,
        this.jobId ? null : `${this.fromPage}`,
        this.jobId ? [`${this.fromPage}`, this.jobId] : null,
        '/home/job-detail/project-email/project-email-draft',
      )
    }

    if (this.jobId) {
      this.job = this.store.JobInfo
    }

    const subs = this.apiService
      .getCommDraftEmail(
        this.emailDraft.RelatedId,
        this.emailDraft.CommId,
        this.emailDraft.EmailTemplateId,
        this.emailDraft.PersonnelIds,
        this.emailDraft.CommType,
      )
      .subscribe(
        response => {
          this.commEmailDraft = response
          this.emailDraft.CommId = response.commItemEdit.CommId
          this.emailDraft.PersonnelIds = []
          this.store.EmailDraft = this.emailDraft
          this.form.controls.subject.setValue(response.commItemEdit.Subject)
          this.form.controls.fromName.setValue(response.commItemEdit.FromName)
          subs.unsubscribe()
        },
        error => {
          this.draftOuput.emit()
          this.apiService.validateError(error)
        },
      )
  }

  send(formValues) {
    const body: PatchDraftCmd = {
      CommId: this.commEmailDraft.commItemEdit.CommId,
      CommItemId: this.commEmailDraft.commItemEdit.CommItemId,
      EmailTemplateId: this.commEmailDraft.commItemEdit.EmailTemplateId,
      FromPersonnelId: this.commEmailDraft.commItemEdit.FromPersonnelId,
      FromCompanyId: this.commEmailDraft.commItemEdit.FromCompanyId,
      Subject: formValues.subject,
      Message: this.ckEditorComp.html,
    }

    const subs = this.apiService.sendCommEmail(body).subscribe(
      () => {
        this.cancel()
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  saveDraft(formValues, willContinue: boolean) {
    const body: PatchDraftCmd = {
      CommId: this.commEmailDraft.commItemEdit.CommId,
      CommItemId: this.commEmailDraft.commItemEdit.CommItemId,
      EmailTemplateId: this.commEmailDraft.commItemEdit.EmailTemplateId,
      FromPersonnelId: this.commEmailDraft.commItemEdit.FromPersonnelId,
      FromCompanyId: this.commEmailDraft.commItemEdit.FromCompanyId,
      Subject: formValues.subject,
      Message: this.ckEditorComp.html,
    }

    const subs = this.apiService.saveDraft(body).subscribe(
      () => {
        if (!willContinue) {
          this.cancel()
        }
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  cancel() {
    if (this.isModalInput) {
      this.draftOuput.emit()
    } else {
      switch (this.fromPage) {
        case 0:
          this.router.navigate(['/home/job-detail/project-email', this.job.SiteId])
          break
        case 1:
          this.router.navigate(['/home/job-detail/contractor/ords', this.job.JobId])
          break
        case 2:
          this.router.navigate(['/home/job-detail/contractors', this.job.JobId])
          break
        case 3:
          const mItem = this.store.Breadcrumb.find(x => x.title == 'Edit Action')
          if (
            mItem.url == '/home/action-details' ||
            mItem.url == '/home/job-detail/action-details'
          ) {
            if (mItem.keyList?.length > 0) {
              this.router.navigate([mItem.url, mItem.keyList[0], mItem.keyList[1]])
            } else {
              this.router.navigate([mItem.url, mItem.key])
            }
          }
          break
        case 4:
          const addActionMenuItem = this.store.Breadcrumb.find(x => x.title == 'Add Defect')
          if (addActionMenuItem != null) {
            if (addActionMenuItem.key != null) {
              this.router.navigate([addActionMenuItem.url, addActionMenuItem.key])
            } else {
              this.router.navigate([addActionMenuItem.url])
            }
          }

          const editActionMenuItem = this.store.Breadcrumb.find(x => x.title == 'Edit Defect')
          if (editActionMenuItem != null) {
            if (editActionMenuItem.keyList?.length > 0) {
              this.router.navigate([
                editActionMenuItem.url,
                editActionMenuItem.keyList[0],
                editActionMenuItem.keyList[1],
              ])
            } else {
              this.router.navigate([editActionMenuItem.url, editActionMenuItem.key])
            }
          }
          break
        case 5:
          this.router.navigate(['/home/tenders/tender-project', this.emailDraft.RelatedId])
          break
        case 6:
          this.router.navigate(['/home/job-detail/contractor/whs-status', this.jobId])
          break
        case 7:
          this.router.navigate(['/home/orders/details', this.emailDraft.RelatedId])
          break
        default:
          this.router.navigate(['/home/job-detail/contractors', this.jobId ? this.job.JobId : ''])
          break
      }
    }
  }

  setPersonModalVisible(contactType: number, value: boolean) {
    this.contactType = contactType
    this.isPersonModalVisible = value
  }

  selectedPersonEmitter(contact: IContacts) {
    if (this.contactType == this.cc) {
      const emailTo = [
        {
          PersonnelId: contact.PersonnelId,
          CompanyId: contact.CompanyId,
        },
      ]
      const subs = this.apiService
        .postCCToItems(this.commEmailDraft.commItemEdit.CommItemId, emailTo, false, true)
        .subscribe(
          response => {
            this.commEmailDraft.commItemToes = response.commItemToes
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
    } else {
      this.assignPerson(
        this.contactType,
        contact.PersonnelId,
        `${contact.FirstName} ${contact.LastName}`,
      )
    }

    this.setPersonModalVisible(this.contactType, false)
  }

  assignPerson(contactType: number, personnelId: string, contactName: string) {
    this.contactType = contactType
    this.commEmailDraft.commItemEdit.FromPersonnelId = personnelId
    this.commEmailDraft.commItemEdit.FromName = contactName
    this.form.controls.fromName.setValue(contactName)
  }

  emailTemplatesEmitter(emailTemplateId: string) {
    const subs = this.apiService
      .getCommEmailTemplate(emailTemplateId, this.commEmailDraft.commItemEdit.CommId)
      .subscribe(
        response => {
          this.commEmailDraft.commItemEdit.Subject = response.Subject
          this.commEmailDraft.commItemEdit.Message = response.Message
          this.form.controls.subject.setValue(response.Subject)
          this.commEmailDraft.commItemEdit.EmailTemplateId = response.EmailTemplateId
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
  }

  deleteCcToItem(id: string) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const subs = this.apiService.deleteCcToItem(id).subscribe(
          () => {
            this.commEmailDraft.commItemToes = this.commEmailDraft.commItemToes.filter(
              x => x.CommItemToId != id,
            )
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  applyChangeSender(mode: number) {
    const subs = this.apiService
      .commChangeSender(this.commEmailDraft.commItemEdit.CommId, mode)
      .subscribe(
        response => {
          this.commEmailDraft.commItemEdit = response
          this.form.controls.subject.setValue(response.Subject)
          this.form.controls.fromName.setValue(response.FromName)
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
  }

  discardDraft() {
    this.modal.confirm({
      nzTitle: 'Discard Draft Email',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const subs = this.apiService
          .deleteCommDraft(this.commEmailDraft.commItemEdit.CommId)
          .subscribe(
            () => {
              this.cancel()
              subs.unsubscribe()
            },
            error => {
              this.apiService.validateError(error)
            },
          )
      },
    })
  }

  get ToRecipients() {
    return this.commEmailDraft.commItemToes.filter(x => x.TO == true)
  }

  get CCRecipients() {
    return this.commEmailDraft.commItemToes.filter(x => x.CC == true)
  }

  get EmailGroup() {
    if (this.commEmailDraft.commItemEdit.CommStatusId == 1) {
      switch (this.commEmailDraft.commItemEdit.CommTypeId) {
        case 3:
          return [3]
        case 4:
          return [4, 8, 18, 19, 20]
        case 14:
          return [14]
        case 17:
          return [4, 17]
        case 22:
          return [22]
        default:
          return [4, 8, 18]
      }
    } else {
      return this.commEmailDraft.commItemEdit.CommTypeId
    }
  }

  addRecipient() {
    this.saveDraft(this.form.value, true)
    if (this.isModalInput) {
      this.setRecipientModalVisible(true)
    } else {
      if (this.fromPage == 5) {
        this.router.navigate([
          '/home/tenders/select-bidders/',
          this.emailDraft.RelatedId,
          this.commEmailDraft.commItemEdit.CommItemId,
        ])
      } else {
        this.router.navigate([
          '/home/job-detail/project-email/project-contacts/',
          this.commEmailDraft.commItemEdit.CommItemId,
          this.jobId ?? '',
        ])
      }
    }
  }

  setRecipientModalVisible(value: boolean) {
    this.isRecipientModalVisible = value
  }

  contactsEmitter() {
    this.setRecipientModalVisible(false)
    this.ngOnInit()
  }
}
