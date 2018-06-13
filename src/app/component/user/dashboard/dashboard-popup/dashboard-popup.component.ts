import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-dashboard-popup',
  templateUrl: './dashboard-popup.component.html',
  styleUrls: ['./dashboard-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPopupComponent implements OnInit {

  @Input() idModify = '';
  @Output() isSave = new EventEmitter;
  @Output() isHide = new EventEmitter;
  @Input() partner = '';
  @Input() popupVisible = false;
  @Input() employees = '';
  constructor() { }

  ngOnInit() {
  }

  follow() {

  }
}

export class StudentFollow {
  name = "Nguyễn Huy Thắng";
  mssv = "13020403";
  classMH = "K58CB";

}