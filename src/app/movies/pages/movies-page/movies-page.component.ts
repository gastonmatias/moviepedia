import { Component } from '@angular/core';
import { ThemoviedbService } from 'src/app/themoviedb/themoviedb.service';

@Component({
  templateUrl: './movies-page.component.html',
  styles: [
  ]
})
export class MoviesPageComponent {
  public trendingMovies = []
  public popularMovies = []
  public topRatedMovies = []

  constructor(
    private themoviedbService: ThemoviedbService 
  ) {}

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getPopularMovies()
    this.getTopRatedMovies()
  }

  getTrendingMovies () {
    this.themoviedbService.getTrendingMovies()
      .subscribe( resp => {
        this.trendingMovies = resp.results
      })
  }
  
  getPopularMovies () {
    this.themoviedbService.getPopularMovies()
      .subscribe( resp => {
        this.popularMovies = resp.results
      })
  }
  
  getTopRatedMovies () {
    this.themoviedbService.getTopRatedMovies()
      .subscribe( resp => {
        this.topRatedMovies = resp.results
      })
  }
}
