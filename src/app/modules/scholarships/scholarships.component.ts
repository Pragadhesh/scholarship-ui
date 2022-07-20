import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from 'src/app/services/scholarship.service';

type embeddedsigning = {
  envelopeId: string;
  redirectUrl: string;
};

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
  showloading: boolean = false;
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
    this.showloading=true
    let body = {
      templateId : this.templateid,
      signerName : signername,
      signerEmail : signeremail
    }
    this.scholarshipService.applyScholarship(body).subscribe(
      (response:embeddedsigning) => {
        this.showloading = false
        this.showModal = -1;
        window.location.href = response.redirectUrl;
      });
  }
}
function then(arg0: (response: any) => void) {
  throw new Error('Function not implemented.');
}

