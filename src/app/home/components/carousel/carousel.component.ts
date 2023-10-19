import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../../movies/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: any[] = [];

  @Input()
  mediaArray = []
  
  @Input()
  title = ''

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  responsiveOptionsCarousel = [
    {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '1220px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '1100px',
        numVisible: 5,
        numScroll: 1
    },
    {
        breakpoint: '800px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '700px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '500px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '400px',
        numVisible: 1,
        numScroll: 1
    }
];

    onClickImage(item:object){
        console.log({item});
    }
}
