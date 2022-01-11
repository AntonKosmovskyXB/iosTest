import { AfterViewInit, Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-no-main-menu',
  templateUrl: './no-main-menu.component.html',
})
export class NoMainMenuComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    this.setSections(false)
  }

  ngOnDestroy(): void {
    this.setSections(true)
  }

  setSections(value: boolean) {
    document.getElementById('web_menu_header').style.display = value ? 'block' : 'none'
    document.getElementById('mobile_menu_header').style.display = value ? 'block' : 'none'
    document.getElementById('breadcrumb_header').style.display = value ? 'block' : 'none'
  }
}
