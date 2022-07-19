import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedded-signing',
  templateUrl: './embedded-signing.component.html',
  styleUrls: ['./embedded-signing.component.scss']
})
export class EmbeddedSigningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "https://google.com/about";
  }

}
