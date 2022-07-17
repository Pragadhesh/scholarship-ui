import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showModal = -1;

  show(index)
  {
    this.showModal = index;
  }

  close()
  {
    this.showModal = -1;
  }

}
