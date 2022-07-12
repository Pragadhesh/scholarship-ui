import { Component, Input, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;
  

  selectedIndex = 0;


  ngOnInit(): void {
    if (this.autoSlide)
    {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
      setTimeout(() => {
        this.autoslider();
        this.autoSlideImages();
      },this.slideInterval)
  }

  autoslider(): void {
    this.selectImage(this.selectedIndex)
    this.selectedIndex++;
    if (this.selectedIndex > this.images.length-1)
    {
      this.selectedIndex = 0
    }
  }
  
  selectImage(index: number): void {
      this.selectedIndex = index;
  }
}
