import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from 'src/app/services/scholarship.service';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit {
  constructor(private scholarshipService: ScholarshipService) {}
  public scholarship: any[] = [];
  templateid : string;
  apply:boolean = true;
  ngOnInit(): void {
    this.scholarshipService.getScholarships().subscribe((res: any)=> this.scholarship = res)
  }
  showModal = -1;
  show(index,tempid)
  {
    this.showModal = index;
    this.templateid = tempid;
  }
  close()
  {
    this.showModal = -1;
  }
  applyscholarship(signername,signeremail)
  {
    console.log(signername)
    console.log(signeremail)
    console.log(this.templateid)
  }
}
function then(arg0: (response: any) => void) {
  throw new Error('Function not implemented.');
}

