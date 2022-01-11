import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router'
import { Observable } from 'rxjs'
import { ProjectScheduleComponent } from 'src/app/pages/dashboard/gantt/project-schedule/project-schedule.component'

@Injectable({
  providedIn: 'root',
})
export class ProjectScheduleGuard implements CanDeactivate<ProjectScheduleComponent> {
  canDeactivate(
    component: ProjectScheduleComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ):
    | boolean
    | import('@angular/router').UrlTree
    | Observable<boolean | import('@angular/router').UrlTree>
    | Promise<boolean | import('@angular/router').UrlTree> {
    if (component.isDirty) {
      const response = confirm('Do you want to discard all the changes?')
      if (response == false) {
        return false
      }
      return true
    }
    return true
  }
}
