import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../../themoviedb/themoviedb.service';
import { MovieListItem } from 'src/app/movies/interfaces/movieList';

@Component({
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  public trendingMovies:MovieListItem[] = []
  public popularMovies:MovieListItem[] = []
  public topRatedMovies:MovieListItem[] = []

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
