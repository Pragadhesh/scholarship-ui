import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title = 'scholarship-ui';
  images = [
    {
      imageSrc:'../../assets/images/hands.webp',
      imageAlt: 'image1',
    },
    {
      imageSrc:
        '../../assets/images/student.webp',
      imageAlt: 'image2',
    },
    {
      imageSrc:
        '../../assets/images/student-4.jpg',
      imageAlt: 'image3',
    },
    {
      imageSrc:
        '../../assets/images/student-5.jpg',
      imageAlt: 'image5',
    },
    {
      imageSrc:
        '../../assets/images/student-7.jpg',
      imageAlt: 'image6',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
