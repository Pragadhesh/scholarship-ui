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
  apply:boolean = true;
  ngOnInit(): void {
    this.scholarshipService.getScholarships().subscribe((res: any)=> this.scholarship = res)
  }
}
function then(arg0: (response: any) => void) {
  throw new Error('Function not implemented.');
}

