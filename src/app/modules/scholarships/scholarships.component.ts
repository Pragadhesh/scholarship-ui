import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit {

  constructor() { }


  demo = [
    {
      name: "RRR",
      description: "Hey this is a demo scolarship",
      eligiblity: "Only for students"
    },
    {
      name: "RRR",
      description: "Hey this is a demo scolarship",
      eligiblity: "Only for students"
    },
    {
      name: "RRR",
      description: "Hey this is a demo scolarship",
      eligiblity: "Only for students"
    }
  ]

  ngOnInit(): void {
  }

}
