import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeSideNav.emit()
  }

}
