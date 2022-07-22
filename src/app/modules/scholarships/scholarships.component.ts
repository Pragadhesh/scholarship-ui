import { Component, OnInit } from '@angular/core';
import { ScholarshipService } from 'src/app/services/scholarship.service';
import { Router } from '@angular/router';

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
  constructor(private scholarshipService: ScholarshipService,private router: Router) {}
  public scholarship: any[] = [];
  templateid : string;
  apply:boolean = true;
  showloading: boolean = false;
  consent_url: string;
  ngOnInit(): void {
    const regex = new RegExp('templateid*');
    if (regex.test(this.router.url))
    {
      this.showModal = 1
      let temp = this.router.url.split('templateid=')
      let tempid = temp[1].split('&event')
      this.templateid = tempid[0]
    }
    this.scholarshipService.getScholarships().subscribe((res: any)=> this.scholarship = res)
  }
  showModal = -1;
  show(tempid)
  {
    let bdy = {
      templateid: tempid
    }
    this.scholarshipService.getconsent(bdy).subscribe((res: any)=> 
    {
    this.consent_url = res.consent_url
    window.location.href = this.consent_url;
    });
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
    console.log(body)
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

