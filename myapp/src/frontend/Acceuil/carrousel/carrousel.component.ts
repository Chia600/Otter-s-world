import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarouselComponent {
// here is your list of images
  slides: string[] = [
    '../../assets/img/shiba-inu-1-768x512.jpg',
    '../../assets/img/shiba-meme-pp.jpg',
    '../../assets/img/shiba-inu-1-768x512.jpg'
  ];
  // then you take the first item of it
  currentSlide: string = this.slides[0];
  // and there you need to increment the index of the item of your list to show the next image
    nextSlide() {
      if (this.currentSlide ===  this.slides[-1]) {
        // If currently on the last slide, go to the first slide
        this.currentSlide = this.slides[0];
      } else {
        this.currentSlide = this.slides[this.slides.indexOf(this.currentSlide)+1]
        
      }
      console.log(this.currentSlide)
    }

  prevSlide() {
    if (this.currentSlide === this.slides[0]) {
      this.currentSlide = this.slides[-1]
    } else {
      // If currently on the first slide, go to the last slide
      this.currentSlide = this.slides[this.slides.indexOf(this.currentSlide)-1]
    }
  }
}


