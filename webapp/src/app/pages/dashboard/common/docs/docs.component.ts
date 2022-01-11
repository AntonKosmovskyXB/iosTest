import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { Subject, Observable, of } from 'rxjs'
import { IDocumentDetails } from '../../model/documentDetails'
import { NzModalService } from 'ng-zorro-antd'
import { CommAttachedDocCmd } from '../../model/comm'
import { StoreService } from 'src/app/services/store/store.service'
import { Router } from '@angular/router'

const JOB = 1
const SAFETY_MANUAL = 2
const COMM_EMAIL = 3
const WKO = 4

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent implements OnChanges {
  @Input() isModalInput: boolean
  @Input() typeInput: number
  @Input() idInput: string
  @Input() jobInput: any
  @Input() siteIdInput: string
  @Input() canAddDocumentInput: boolean
  @Input() canEditDocumentInput: boolean
  @Input() canDeleteDocumentInput: boolean
  @Input() canEditFolderInput: boolean
  @Input() canDeleteFolderInput: boolean
  @Output() docsOutput = new EventEmitter()

  isEditFolder: boolean
  folder = this.DefaultFolder

  originalList: any[]
  listOfFilterData: any[]
  listOfMapData: Observable<any[]>
  mapOfExpandedData: { [key: string]: any[] } = {}

  selectedDocSubject = new Subject<IDocumentDetails>()

  searchTerm = ''
  companyName = ''
  revision = ''
  grp = ''
  documentGroupId: string
  companyOnly: boolean = false
  currentOnly: boolean = true
  advancedSearch: boolean = false
  isAllChecked: boolean

  sortOfColumn = [
    {
      compare: (a: any, b: any) => a.Title < b.Title,
      priority: 5,
    },
    {
      compare: (a: any, b: any) => a.GroupAbbr < b.GroupAbbr,
      priority: 4,
    },
    {
      compare: (a: any, b: any) =>
        a.DocumentStatusAbbr < b.DocumentStatusAbbr,
      priority: 3,
    },
    {
      compare: (a: any, b: any) => a.Revision < b.Revision,
      priority: 2,
    },
    {
      compare: (a: any, b: any) => a.RevisionDate < b.RevisionDate,
      priority: 1,
    },
  ]

  constructor(
    private apiService: jwtAuthService,
    private modal: NzModalService,
    private store: StoreService,
    private router: Router,
  ) {}

  ngOnChanges(): void {
    if (this.typeInput) {
      const subs = this.listApi.subscribe(
        response => {
          this.isAllChecked = false
          this.originalList = response.sort((a, b) =>
            `${a.RecordTypeId}-${a.Sequence}` > `${b.RecordTypeId}-${b.Sequence}` ? 1 : -1,
          )
          this.initialiseList(this.originalList)
          this.filterOriginalList()
          subs.unsubscribe()
        },
        error => {
          this.apiService.validateError(error)
        },
      )
    }
  }

  expandCollapse(value: boolean) {
    if (this.listOfMapData) {
      this.listOfMapData.forEach(x =>
        x.forEach(y =>
          this.mapOfExpandedData[y.key]
            .filter(z => z.parent)
            .forEach(z => (z.parent.expand = value)),
        ),
      )
    }
  }

  advancedSearching(value: boolean) {
    this.advancedSearch = value
    let documents: any[] = []
    if (value) {
      documents = this.originalList.filter(x => x.RecordTypeId == 2)
    } else {
      documents = this.originalList
    }
    this.initialiseList(documents)
    this.filterOriginalList()
  }

  selectedDocumentGroupEmitter(documentGroupId: string) {
    this.documentGroupId = documentGroupId
    this.filterOriginalList()
  }

  initialiseList(list: any[]) {
    if (this.advancedSearch) {
      list = list.filter(x => x.RecordTypeId == 2)
      if (this.currentOnly) {
        list = list.filter(x => x.Current == true)
      }
    }
    list.forEach(x => (x.key = x.DocumentId ?? x.FolderId))
    list = flatToHierarchy(list, this.advancedSearch)
    list.forEach(x => (this.mapOfExpandedData[x.key] = this.convertTreeToList(x)))

    this.listOfMapData = of(list)
  }

  private get listApi() {
    switch (this.typeInput) { 
      case COMM_EMAIL:
        return this.apiService.getCommDocuments(this.idInput, this.currentOnly)
    }
  }

  getUploadUrl(folderId: string) {
    switch (this.typeInput) {
      case JOB:
      case COMM_EMAIL:
      case WKO:
        return [
          '/home/upload-doc/',
          this.jobInput ? this.jobInput.JobId : 'null',
          'null',
          this.jobInput ? this.jobInput.SiteId : this.siteIdInput,
          'null',
          'null',
          folderId,
        ]
      case SAFETY_MANUAL:
        return [
          '/home/upload-doc/',
          this.jobInput ? this.jobInput.JobId : 'null',
          'null',
          'null',
          'null',
          'null',
          folderId,
        ]
    }
  }

  filterOriginalList() {
    let search = this.originalList.filter(x => x.RecordTypeId == 2)
    if (this.searchTerm.length > 0) {
      search = search.filter(
        x => x?.DocumentId && x?.Title?.toLowerCase().includes(this.searchTerm.toLowerCase()),
      )
    }

    if (this.advancedSearch) {
      if (this.companyName.length > 0) {
        search = search.filter(x =>
          x?.SubTitle?.toLowerCase().includes(this.companyName.toLowerCase()),
        )
      }
      if (this.revision.length > 0) {
        search = search.filter(x =>
          x?.Revision?.toLowerCase().includes(this.revision.toLowerCase()),
        )
      }
      if (this.grp.length > 0) {
        search = search.filter(x => x?.GroupAbbr?.toLowerCase().includes(this.grp.toLowerCase()))
      }

      if (this.documentGroupId) {
        search = search.filter(x => x.GroupId == this.documentGroupId)
      }

      if (this.companyOnly) {
        search = search.filter(x => x.CompanyId == this.store.UserInfo.CompanyId)
      }

      if (this.currentOnly) {
        search = search.filter(x => x.Current)
        this.initialiseList(search)
      }
    }

    this.listOfFilterData = search
  }

  getDocumentUrl(docId: string, download: boolean) {
    const subs = this.apiService.getDocumentDetails(docId).subscribe(
      resp => {
        subs.unsubscribe()
        if (download) {
          window.open(resp.Url)
        } else {
          this.selectedDocSubject.next(resp)
        }
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  updateDocumentUrl(action: number, docId: string) {
    return ['/home/update-doc/', action, docId, this.jobInput ? this.jobInput.JobId : 'null']
  }

  deleteDocument(docId: string) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const subs = this.deleteApi(docId).subscribe(
          () => {
            this.ngOnChanges()
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  deleteApi(docId: string) {
    switch (this.typeInput) {
      case JOB:
      case COMM_EMAIL:
      case WKO:
        return this.apiService.deleteSiteDocument(
          docId,
          this.jobInput ? this.jobInput.SiteId : this.siteIdInput,
        )
      case SAFETY_MANUAL:
        return this.apiService.deleteDocument(docId)
    }
  }

  get DefaultFolder(): any {
    return {
      FolderId: null,
      ProjectId: null,
      FolderName: null,
      ParentFolderId: null,
      Shared: true,
      ShareWithClients: false,
    }
  }

  editFolder(folderId: string) {
    const subs = this.apiService.getDocumentFolder(folderId).subscribe(
      response => {
        this.folder = response
        this.isEditFolder = true
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  selectedFolderEmitter(folder: string) {
    this.folder.ParentFolderId = folder
  }

  cancelEditFolder() {
    this.isEditFolder = false
    this.folder = this.DefaultFolder
  }

  saveFolder() {
    const subs = this.apiService.patchDocumentFolder(this.folder).subscribe(
      () => {
        this.ngOnChanges()
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
    this.cancelEditFolder()
  }

  deleteFolder(folderId: string) {
    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const subs = this.apiService.deleteDocumentFolder(folderId).subscribe(
          () => {
            this.ngOnChanges()
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  collapse(array: any[], data: any, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!
          target.expand = false
          this.collapse(array, target, false)
        })
      } else {
        return
      }
    }
  }

  convertTreeToList(root: any): any[] {
    const stack: any[] = []
    const array: any[] = []
    const hashMap = {}
    stack.push({ ...root, level: 0, expand: false })

    while (stack.length !== 0) {
      const node = stack.pop()!
      this.visitNode(node, hashMap, array)
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node })
        }
      }
    }

    return array
  }

  visitNode(
    node: any,
    hashMap: { [key: string]: boolean },
    array: any[],
  ): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true
      array.push(node)
    }
  }

  get showCheckbox() {
    return this.typeInput == COMM_EMAIL || this.typeInput == WKO || this.advancedSearch
  }

  get showAdvancedSearch() {
    return this.typeInput == JOB
  }

  updateAllChecked(value: boolean) {
    if (this.listOfFilterData) {
      this.listOfFilterData.forEach(x => {
        x.Checked = value
      })
    }

    this.originalList.forEach(x => {
      x.Checked = value
    })

    this.initialiseList(this.originalList)
  }

  updateItemChecked(value: boolean, id: string) {
    if (this.listOfFilterData) {
      this.listOfFilterData.forEach(x => {
        if (x.DocumentId == id) {
          x.Checked = value
        }
      })
    }

    this.originalList.forEach(x => {
      if (x.DocumentId == id) {
        x.Checked = value
      }
    })

    this.initialiseList(this.originalList)
  }

  save() {
    const checkedItems: string[] = []
    this.originalList.forEach(x => {
      if (x.Checked) {
        checkedItems.push(x.DocumentId)
      }
    })

    switch (this.typeInput) {
      case COMM_EMAIL:
        this.saveSelectedCommDocuments(checkedItems)
        break
    }
  }

  saveSelectedCommDocuments(checkedItems: string[]) {
    const body: CommAttachedDocCmd = {
      CommItemId: this.idInput,
      DocumentIds: checkedItems,
    }
    const subs = this.apiService.attCommDocuments(body).subscribe(
      () => {
        this.cancel()
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  cancel() {
    if (this.isModalInput) {
      this.docsOutput.emit()
    } else {
      const menu = this.store.Breadcrumb
      let menuItem = menu.find(x => x.title == 'Details')
      if (menuItem == null) {
        menuItem = menu.find(x => x.title == 'Purchase Order/s')
      }
      if (menuItem.url == '/home/job-detail/project-email/project-email-draft') {
        this.router.navigate([menuItem.url, `${menuItem.key}`])
      }
      if (menuItem.url == '/home/job-detail/contractor/ords') {
        this.router.navigate([menuItem.url, `${menuItem.key}`])
      } else if (menuItem.url == '/home/pcbu/ords') {
        this.router.navigate([menuItem.url, `${menuItem.keyList[0]}`, `${menuItem.keyList[1]}`])
      }
    }
  }

  deleteDocs() {
    const checkedItems: string[] = []
    this.originalList.forEach(x => {
      if (x.Checked && x.RecordTypeId == 2) {
        checkedItems.push(x.DocumentId)
      }
    })

    this.modal.confirm({
      nzTitle: 'Confirm Delete',
      nzContent: 'Are you sure?',
      nzOnOk: () => {
        const body = {
          SiteId: this.jobInput.SiteId,
          DocumentIds: checkedItems,
        }
        const subs = this.apiService.deleteDocuments(body).subscribe(
          () => {
            this.ngOnChanges()
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  obsoleteDocs() {
    const checkedItems: string[] = []
    this.originalList.forEach(x => {
      if (x.Checked && x.RecordTypeId == 2) {
        checkedItems.push(x.DocumentId)
      }
    })

    this.modal.confirm({
      nzTitle: 'Confirm Obsolete',
      nzContent: 'Are you sure to obsolete the selected Document(s)?',
      nzOnOk: () => {
        const body = {
          SiteId: this.jobInput.SiteId,
          DocumentIds: checkedItems,
        }
        const subs = this.apiService.obsoleteDocuments(body).subscribe(
          () => {
            this.ngOnChanges()
            subs.unsubscribe()
          },
          error => {
            this.apiService.validateError(error)
          },
        )
      },
    })
  }

  currentFilter() {
    if (this.advancedSearch) {
      this.filterOriginalList()
    } else {
      this.ngOnChanges()
    }
  }

  get ShowSearchTable() {
    return (
      this.searchTerm.length > 0 ||
      ((this.companyName.length > 0 ||
        this.grp.length > 0 ||
        this.revision.length > 0 ||
        this.documentGroupId ||
        this.companyOnly ||
        !this.currentOnly) &&
        this.advancedSearch)
    )
  }

  sortFunction(type: number) {
    return this.sortOfColumn[type].compare
  }

  sortPriority(type: number) {
    return this.sortOfColumn[type].priority
  }

  get SortFileName() {
    return 0
  }

  get SortGroupAbbr() {
    return 1
  }

  get SortStatus() {
    return 2
  }

  get SortRevision() {
    return 3
  }

  get SortRevisedDate() {
    return 4
  }
}

function flatToHierarchy(flat: any[], advanceSearch: boolean): any[] {
  const roots: any[] = []
  const all = {}

  flat.forEach(x => (all[x.key] = x))

  if (advanceSearch) {
    Object.keys(all).forEach(x => {
      const item = all[x]
      roots.push(item)
    })
  } else {
    Object.keys(all).forEach(x => {
      const item = all[x]
      if (!item.ParentFolderId) {
        roots.push(item)
      } else if (item.ParentFolderId in all) {
        const p = all[item.ParentFolderId]
        if (!('children' in p)) {
          p.children = []
        }
        p.children.push(item)
      }
    })
  }
  return roots
}
