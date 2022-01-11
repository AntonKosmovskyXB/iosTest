import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MenuService } from 'src/app/services/menu'
import { StoreService } from 'src/app/services/store/store.service'

@Component({
  selector: 'app-home',
  template: '',
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private menuService: MenuService,
    private store: StoreService,
  ) {}

  ngOnInit(): void {
    const homepage = this.menuService._homePage ?? '/home/no-main-menu'
    this.router.navigate([homepage])
  }
}
