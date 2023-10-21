import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../../themoviedb/themoviedb.service';

@Component({
  templateUrl: './popular-page.component.html',
  styles: [
  ]
})
export class PopularPageComponent implements OnInit {

  public popularMovies:any = []

  constructor(
    private themoviedbService:ThemoviedbService
  ) {}

  ngOnInit(): void {
    this.getPopularMovies()
  }

  getPopularMovies () {
    this.themoviedbService.getPopularMovies()
      .subscribe(resp => this.popularMovies = resp.results)
  }

}
