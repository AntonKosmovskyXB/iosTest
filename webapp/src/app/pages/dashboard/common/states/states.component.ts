import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { jwtAuthService } from 'src/app/services/jwt'
import { IAutoComplete } from '../../model/autoComplete'

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
})
export class StatesComponent implements OnInit {
  @Input() readOnlyInput: boolean
  @Input() stateInput: string
  @Input() smInput: number
  @Input() isOutsideFormInput: boolean

  selectedState: IAutoComplete = {
    nzValue: '',
    nzLabel: '',
  }

  states: any[] = []
  filteredStates: any[] = []

  constructor(private apiService: jwtAuthService) {}

  ngOnInit(): void {
    if (this.readOnlyInput == null || this.readOnlyInput == false) {
      this.fetchStates(false)
    }
  }

  fetchStates(isRefresh: boolean) {
    const subs = this.apiService.getStates(isRefresh).subscribe(
      response => {
        this.states = response
        this.filteredStates = response
        subs?.unsubscribe()
      },
      error => {
        this.apiService.validateError(error)
      },
    )
  }

  onChange(value: string): void {
    this.filteredStates = this.states.filter(
      option => option.StateName.toLowerCase().indexOf(value.toLowerCase()) !== -1,
    )
  }

  onSelectState(selected: any) {
    this.selectedState = {
      nzValue: selected.nzValue,
      nzLabel: selected.nzLabel,
    }
  }

  get SelectedState() {
    return this.stateInput == this.selectedState.nzValue
      ? this.selectedState.nzValue
      : this.stateInput
  }

  set SelectedState(value: any) {
    this.selectedState = value
    this.stateInput = value
  }
}
