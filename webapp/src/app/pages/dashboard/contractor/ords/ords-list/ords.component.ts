import { Component, Input, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NzModalService, NzNotificationService } from 'ng-zorro-antd'
import { Subject } from 'rxjs'
import { jwtAuthService } from 'src/app/services/jwt'
import { MenuService } from 'src/app/services/menu'
import { SecurityService } from 'src/app/services/security/security.service'
import { StoreService } from 'src/app/services/store/store.service'
import { IDocumentDetails } from '../../../model/documentDetails'
import { IMenuItem } from '../../../model/models'
import { IOrders, IOrdersDto } from '../../../model/orders'

@Component({
  selector: 'app-ords',
  templateUrl: './ords.component.html',
})
export class ORDSComponent implements OnInit {
  @Input() isModalInput: boolean

  order: IOrdersDto
  @Input() jobId: string
  checkListId: string
  job = this.store.JobInfo
  emailTemplateId: string

  selectedDocSubject = new Subject<IDocumentDetails>()

  isEditNoteVisible: boolean
  orderAttachmentId: string
  form = new FormGroup({
    note: new FormControl(),
  })

  constructor(
    private menuService: MenuService,
    private apiService: jwtAuthService,
    private store: StoreService,
    private route: ActivatedRoute,
    private router: Router,
    private security: SecurityService,
    private modal: NzModalService,
    private notification: NzNotificationService,
  ) {}

  ngOnInit(): void {
    if (!this.isModalInput) {
      this.jobId = this.route.snapshot.params['jid']
      this.checkListId = this.route.snapshot.params['cid']

      const menu: IMenuItem[] = [
        {
          icon: '',
          key: `${this.job.JobId}`,
          title: this.apiService.getJobTitle(this.job),
          url: '/home/job-detail',
        },
      ]

      if (this.IsFromCheckList) {
        menu.push({
          icon: '',
          key: `${this.checkListId}`,
          title: 'CheckList',
          url: '/home/pcbu/checklist',
        })
      }

      menu.push({ icon: '', key: '', title: 'Purchase Order/s', url: '' })

      this.menuService.renderMenu({ breadcrumb: menu })

      this.apiService.SetBreadcrumb(
        menu,
        !this.checkListId ? this.jobId : null,
        this.checkListId ? [this.jobId, this.checkListId] : null,
        this.checkListId ? '/home/pcbu/ords' : '/home/job-detail/contractor/ords',
      )
    }

    const subs = this.apiService
      .getWorkOrders(this.jobId, this.checkListId ? true : false)
      .subscribe(
        response => {
          this.order = response
          if (!this.IsFromCheckList) {
            this.store.ActivePcbuHeader = response.Header
          }
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
  }

  viewDoc(id: string) {
    const subs = this.apiService.viewOrderDocument(id).subscribe(
      resp => {
        subs.unsubscribe()
        this.selectedDocSubject.next(resp)
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  acceptOrder(id: string) {
    this.modal.confirm({
      nzTitle: 'Accept',
      nzContent: 'Are you sure you want to accept this item?',
      nzOnOk: () => {
        const subs = this.apiService.acceptOrder(id).subscribe(
          response => {
            const index = this.order.List.findIndex(x => x.OrderAttachmentId == id)
            this.order.List[index] = response
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  undoAccept(id: string) {
    this.modal.confirm({
      nzTitle: 'Undo Accept',
      nzContent: 'Are you sure you want to undo accept this item?',
      nzOnOk: () => {
        const subs = this.apiService.undoAcceptOrder(id).subscribe(
          response => {
            const index = this.order.List.findIndex(x => x.OrderAttachmentId == id)
            this.order.List[index] = response
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  delete(id: string) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const subs = this.apiService.deleteOrderAttachment(id).subscribe(
          () => {
            this.order.List = this.order.List.filter(x => x.OrderAttachmentId != id)
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  get IsFromCheckList() {
    return this.checkListId
  }

  ShowNote(item: IOrders) {
    if (this.IsFromCheckList) {
      return true
    }
    return !item.MiscAttachment
  }

  ShowAcceptButton(item: IOrders) {
    if (
      !this.IsFromCheckList &&
      (item.AcceptedByName == null || item.OrderStatusId == 2) &&
      item.OrderStatusId != 0
    ) {
      return true
    }

    if (!item.RequireSignedCopy) {
      switch (item.OrderStatusId) {
        case 2:
        case 5:
          return !item.MiscAttachment && item.MasterDoc && item.Active
        case 3:
          return item.FileName.toLowerCase().includes('.pdf') && item.MasterDoc && item.Active
        default:
          return false
      }
    }
  }

  ShowUndoAcceptButton(item: IOrders) {
    if (!this.IsFromCheckList && item.AcceptedByName != null) {
      if (item.OrderStatusId == 2) {
        return false
      }
      return true
    }
    return (
      !item.RequireSignedCopy &&
      (item.OrderStatusId == 3 || item.OrderStatusId == 4) &&
      item.AcceptedByName != null
    )
  }

  get ShowLockLabelText() {
    return this.order.Details.PoSafetyFirst && this.checkListId
  }

  editNote(item: IOrders) {
    this.form.controls.note.setValue(item.Note)
    this.orderAttachmentId = item.OrderAttachmentId
    this.isEditNoteVisible = true
  }

  saveNote() {
    const body = {
      OrderAttachmentId: this.orderAttachmentId,
      Note: this.form.controls.note.value,
    }
    const subs = this.apiService.postOrderNote(body).subscribe(
      () => {
        const index = this.order.List.findIndex(x => x.OrderAttachmentId == this.orderAttachmentId)
        this.order.List[index].Note = this.form.controls.note.value
        this.isEditNoteVisible = false
        this.orderAttachmentId = null
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  sendEmail() {
    const emailTo = [
      {
        PersonnelId: this.order.Details.ToContactPID,
        CompanyId: this.order.Details.ToCompanyId,
      },
    ]

    const subs = this.apiService
      .sendEmail(this.jobId, null, this.emailTemplateId, emailTo)
      .subscribe(
        response => {
          this.notification.success('Email', response.Message)
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
  }

  emailTemplatesEmitter(emailTemplateId: string) {
    this.emailTemplateId = emailTemplateId
  }

  add() {
    const emailTo = [
      {
        PersonnelId: this.order.Details.ToContactPID,
        CompanyId: this.order.Details.ToCompanyId,
      },
    ]
    this.store.EmailDraft = {
      RelatedId: this.jobId,
      EmailTemplateId: this.emailTemplateId,
      PersonnelIds: emailTo,
      CommId: null,
      CommType: null,
    }
    this.router.navigate(['/home/job-detail/project-email/project-email-draft', 1, this.job.JobId])
  }

  postOrderJobDetails() {
    const subs = this.apiService
      .postOrderJobDetails(
        this.jobId,
        this.order.Details.SupplierOnly,
        this.order.Details.PoSafetyFirst,
      )
      .subscribe(
        () => {
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
  }

  refreshTable(list: IOrders[]) {
    this.order.List = list
  }
  
  cancel() {
    this.router.navigate(['/home/job-detail/contractors', this.job.JobId])
  }
}
