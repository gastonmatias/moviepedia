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
  public isLoadingTrending: boolean = false
  public isLoadingPopular: boolean = false
  public isLoadingTopRated: boolean = false  

  constructor(
    private themoviedbService: ThemoviedbService 
  ) {}

  ngOnInit(): void {
    this.getTrendingMovies()
    this.getPopularMovies()
    this.getTopRatedMovies()
  }

  getTrendingMovies () {
    this.isLoadingTrending = true
    this.themoviedbService.getTrendingMovies()
      .subscribe( resp => {
        this.trendingMovies = resp.results
        this.isLoadingTrending = false
      })
  }
  
  getPopularMovies () {
    this.isLoadingPopular = true
    this.themoviedbService.getPopularMovies()
      .subscribe( resp => {
        this.popularMovies = resp.results
        this.isLoadingPopular = false
      })
  }
  
  getTopRatedMovies () {
    this.isLoadingTopRated = true
    this.themoviedbService.getTopRatedMovies()
      .subscribe( resp => {
        this.topRatedMovies = resp.results
        this.isLoadingTopRated = false
      })
  }
}
