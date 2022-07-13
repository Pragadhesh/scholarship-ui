import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scolarship-ui';
  images = [
    {
      imageSrc:'../assets/images/hands.webp',
      imageAlt: 'image1',
    },
    {
      imageSrc:
        '../assets/images/student.webp',
      imageAlt: 'image2',
    },
    {
      imageSrc:
        '../assets/images/student-4.jpg',
      imageAlt: 'image3',
    },
    {
      imageSrc:
        '../assets/images/student-5.jpg',
      imageAlt: 'image5',
    },
    {
      imageSrc:
        '../assets/images/student-7.jpg',
      imageAlt: 'image6',
    },
  ]
}
