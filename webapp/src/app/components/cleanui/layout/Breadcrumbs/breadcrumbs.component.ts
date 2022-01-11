import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators'
import { reduce } from 'lodash'
import { MenuService } from 'src/app/services/menu'
import { IMenuItem } from 'src/app/pages/dashboard/model/models'

@Component({
  selector: 'cui-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  menuData: any[]
  menuItem: IMenuItem
  mainMenu: boolean
  breadcrumbs: any[]

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.menuService.getMenuData().subscribe(menuData => (this.menuData = menuData))
    this.generateBreadcrumbs(this.router.url)
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.generateBreadcrumbs(event.url ? event.url : null)
      })
    this.menuService.menuItemListener.subscribe((menuItem: IMenuItem) => {
      this.menuItem = menuItem
    })
    this.menuService.navListener.subscribe((event: any) => {
      this.mainMenu = event.mainMenu
      this.breadcrumbs = event.data
    })
  }

  getRouterLink(item: IMenuItem): any {
    if (item.keyList) {
      switch (item.keyList.length) {
        case 2:
          return [item.url, item.keyList[0], item.keyList[1]]
        case 3:
          return [item.url, item.keyList[0], item.keyList[1], item.keyList[2]]
        case 4:
          return [item.url, item.keyList[0], item.keyList[1], item.keyList[2], item.keyList[3]]
        default:
          return [item.url, item.key]
      }
    } else {
      return item.key ? [item.url, item.key] : [item.url]
    }
  }

  navigate(item: IMenuItem) {
    const url = `${item.url}/${item.key}`
    this.router.navigateByUrl(url)
  }

  generateBreadcrumbs(event: any) {
    this.breadcrumbs = this.getPath(this.menuData, event).reverse()
  }

  getPath(data: any[], url: string, parents = []) {
    const items = reduce(
      data,
      (result: any, entry: any) => {
        if (result.length) {
          return result
        }
        if (entry.url === url) {
          return [entry].concat(parents)
        }
        if (entry.children) {
          const nested = this.getPath(entry.children, url, [entry].concat(parents))
          return (result || []).concat(nested.filter((e: any) => !!e))
        }
        return result
      },
      [],
    )
    return items.length > 0 ? items : [false]
  }
}
