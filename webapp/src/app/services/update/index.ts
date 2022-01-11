import { Injectable } from '@angular/core'
import { SwUpdate } from '@angular/service-worker'
import { interval } from 'rxjs'

@Injectable()
export class UpdateService {
  constructor(public updates: SwUpdate) {
    if (updates.isEnabled) {
      interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate())
    }
  }

  public checkForUpdates(): void {
    this.updates.available.subscribe(() => this.promptUser())
  }

  private promptUser(): void {
    this.updates.activateUpdate().then(() => document.location.reload())
  }
}
