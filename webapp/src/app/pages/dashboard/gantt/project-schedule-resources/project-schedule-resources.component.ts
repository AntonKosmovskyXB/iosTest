import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { StoreService } from 'src/app/services/store/store.service'
import { IAutoComplete } from '../../model/autoComplete'
import { IProjectScheduleResources } from '../../model/gantt'

@Component({
  selector: 'app-project-schedule-resources',
  templateUrl: './project-schedule-resources.component.html',
})
export class ProjectScheduleResourcesComponent implements OnInit {
  @Input() personnelIdInput: string
  @Output() resourceColorOuput = new EventEmitter()

  resourceLabel: string

  resources: IProjectScheduleResources[] = []
  filteredResources: IProjectScheduleResources[] = []
  selectedResource: IAutoComplete = {
    nzValue: '',
    nzLabel: '',
  }

  myCompanyId = this.store.UserInfo.CompanyId

  constructor(private apiService: jwtAuthService, private store: StoreService) {}

  ngOnInit(): void {
    const subs = this.apiService.getProjectScheduleResources().subscribe(
      response => {
        this.resources = response
        this.filteredResources = response
        this.populateDefault()
        subs.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  populateDefault() {
    const resource = this.resources.find(x => x.PersonnelId == this.personnelIdInput)
    if (resource) {
      this.selectedResource = {
        nzValue: resource.PersonnelId,
        nzLabel: this.getResourceLabel(resource),
      }
      this.resourceLabel = this.selectedResource.nzLabel
    }
  }

  getResourceLabel(item: IProjectScheduleResources) {
    if (item.CompanyId == this.myCompanyId) {
      return `${item.FirstName} ${item.LastName}`
    } else {
      return `${item.CompanyName} - ${item.FirstName.substr(0, 1)}${item.LastName.substr(0, 1)}`
    }
  }

  onChange(value: string): void {
    this.filteredResources = this.resources.filter(
      option =>
        this.getResourceLabel(option)
          .toLowerCase()
          .indexOf(value.toLowerCase()) !== -1,
    )
  }

  onSelectResource(selected: any) {
    this.selectedResource = {
      nzValue: selected.nzValue,
      nzLabel: selected.nzLabel,
    }
    const resource = this.getSelectedResource(selected.nzValue)
    if (resource) {
      this.resourceColorOuput.emit(resource.Colour)
    }
  }

  getSelectedResource(key: string): IProjectScheduleResources {
    let resource = this.resources.find(x => x.PersonnelId == key)
    if (!resource) {
      resource = this.resources.find(x => this.getResourceLabel(x) == key)
    }
    return resource
  }

  get SelectedPersonnelId(): string {
    return this.getSelectedResource(this.resourceLabel) ? this.selectedResource.nzValue : null
  }
}
