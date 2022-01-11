import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TopbarService {
  connectionsListener = new EventEmitter<any>()

  constructor() {}

  refreshConnections() {
    this.connectionsListener.emit()
  }
}
