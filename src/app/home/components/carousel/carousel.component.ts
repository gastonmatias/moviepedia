import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDetail } from 'src/app/movies/interfaces/movieDetail';
import { MovieListItem } from 'src/app/movies/interfaces/movieList';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
    images: any[] = [];

    @Input()
    mediaArray:MovieListItem[] = []
    
    @Input()
    title = ''

    responsiveOptionsCarousel = [
    {
        breakpoint: '3000px',
        numVisible: 6,
        numScroll: 6
    },
    {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 6
    },
    {
        breakpoint: '1220px',
        numVisible: 6,
        numScroll: 6
    },
    {
        breakpoint: '1100px',
        numVisible: 5,
        numScroll: 5
    },
    {
        breakpoint: '800px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '700px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '500px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '400px',
        numVisible: 1,
        numScroll: 1
    }
    ];

    constructor ( 
        private router: Router 
    ) {}

    onClickCarouselItem(item:MovieDetail){
        this.router.navigate([`/movies/${item.id}`])
    }
}
