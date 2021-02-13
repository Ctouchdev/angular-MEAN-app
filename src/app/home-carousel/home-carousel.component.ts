import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
  providers: [NgbCarouselConfig]
})

export class HomeCarousel {

  constructor(config: NgbCarouselConfig) {
    //
    config.interval = 3500;
    config.keyboard = true;
    config.pauseOnHover = true;

  }

}
