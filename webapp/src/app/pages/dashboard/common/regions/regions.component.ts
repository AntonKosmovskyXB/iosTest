import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { IRegion } from '../../model/region'

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
})
export class RegionsComponent implements OnInit {
  @Input() regionIdInput: string
  @Input() hideRegionIfEmptyInput: boolean
  @Input() isOutsideFormInput: boolean
  @Output() regionOutput = new EventEmitter()

  regions: IRegion[] = []

  constructor(private apiService: jwtAuthService) {}

  ngOnInit(): void {
    this.fetchRegions(false)
  }

  fetchRegions(isRefresh: boolean) {
    const subs = this.apiService.getRegions(isRefresh).subscribe(
      response => {
        this.regions = response.filter(x => x.Active == true)
        subs?.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  onChange(selected: any) {
    this.regionOutput.emit(selected)
  }

  get hideRegion() {
    return this.hideRegionIfEmptyInput && this.regions?.length < 1
  }
}
