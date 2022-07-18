import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from 'src/app/services/scholarship.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public scholarshipservice: ScholarshipService) { }
  public scholarship: any[] = [];
  showloading: boolean = false;
  apply: boolean = false;

  ngOnInit(): void {
    this.scholarshipservice.getScholarships().subscribe((res: any)=> this.scholarship = res)
    console.log(this.scholarship)
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
  addscholarship(scholarsipname,description,eligibility)
  {
    this.showloading=true
    let body = {
      "name" : scholarsipname,
      "description" : description,
      "eligiblity": eligibility,
      "status": "true"
    }
    this.scholarshipservice.addScholarship(body).subscribe(
    (response) => {
      console.log(response);
      this.ngOnInit()
      this.showloading = false
      this.showModal = -1;
    });
  }
}

