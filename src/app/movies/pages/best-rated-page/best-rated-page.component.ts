import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/themoviedb/themoviedb.service';

@Component({
  templateUrl: './best-rated-page.component.html',
  styles: [
  ]
})
export class BestRatedPageComponent implements OnInit{

  public bestRatedMovies = []

  constructor(
    private themoviedbService: ThemoviedbService 
  ) {}

  ngOnInit(): void {
    this.getTrendingMovies()
  }

  getTrendingMovies () {
    this.themoviedbService.getTopRatedMovies()
      .subscribe( resp => {
        this.bestRatedMovies = resp.results
      })
  }

}
