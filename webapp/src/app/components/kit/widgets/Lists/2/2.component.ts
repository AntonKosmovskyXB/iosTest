import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'kit-list-2',
  templateUrl: './2.component.html',
  styleUrls: ['./2.component.scss'],
})
export class CuiList2Component implements OnInit {
  activeKey = 0
  constructor() {}
  ngOnInit() {}
  changeKey(key: number) {
    this.activeKey = key
  }
}
