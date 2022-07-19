import { Component, Input, OnInit } from '@angular/core';

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
  templateid: string;
  ngOnInit(): void {
  }

  gettemplateid(scholarship)
  {
    this.templateid = scholarship.templateid
  }

}
