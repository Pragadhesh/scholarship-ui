import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface scholarships {
  name: string;
  description: string;
  eligibility: string;
}

@Component({
  selector: 'app-scholarship-card',
  templateUrl: './scholarship-card.component.html',
  styleUrls: ['./scholarship-card.component.scss']
})
export class ScholarshipCardComponent implements OnInit {

  constructor() { }

  @Input() scolarships: scholarships[] = []
  @Input() apply: boolean
  @Output() templateid = new EventEmitter<any>();
  ngOnInit(): void {
  }

  gettemplateid(scholarship)
  {
    this.templateid.emit(scholarship.templateid)
  }

}
