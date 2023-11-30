import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThemoviedbService } from 'src/app/themoviedb/themoviedb.service';
import { MovieListItem, MovieAPIResponse, MoviePageType } from '../../interfaces/movieList';
import * as movieHelper from 'src/app/shared/helpers/movieHelper';
import { HttpParams } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  templateUrl: './generic-page.component.html',
})
export class GenericPageComponent implements OnInit {
  
  public movies: MovieListItem[] = [];
  public page: number = 1
  public first: number = 0
  public totalRecords: number = 20;
  public rows: number = 0;
  public pageType: string = '';
  public title: string = '';
  public isLoading:boolean = true
  
  constructor(
    private themoviedbService: ThemoviedbService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
  ) { }

  ngOnInit(): void {
    // determina que tipo pagina es y setea titulo dinamicamente (popular | trending | best rated)
    const currentPath = this.activatedRoute.snapshot.url[0].path;
    this.pageType     = movieHelper.getPageType(currentPath)!
    this.title        = movieHelper.setPageTitle(this.pageType)!
    
    // obtiene valores de page y first desde query params para posterior exec de api call
    this.activatedRoute.queryParams.subscribe(params => {
      const pageParam = params['page'];
      const firstParam = params['first'];
      this.page = +pageParam
      this.first = +firstParam
    });

    this.getMovies();
  }

  // exec api call y rellena variable "movies" dependiendo que tipo de pagina es (popular | trending | best rated)
  getMovies() {
    this.isLoading = true

    switch (this.pageType) {
      case MoviePageType.trending:
        this.themoviedbService.getTrendingMovies(this.page)
          .subscribe( (resp:MovieAPIResponse) => {
            this.movies = resp.results
            this.setPaginatorProps(resp)         
            this.isLoading = false
          })
          break;

      case MoviePageType.popular:
          this.themoviedbService.getPopularMovies(this.page)
            .subscribe( (resp:MovieAPIResponse) => {
              this.movies = resp.results
              this.setPaginatorProps(resp)
              this.isLoading = false         
            })
            break;
      
      case MoviePageType.bestRated:
          this.themoviedbService.getTopRatedMovies(this.page)
            .subscribe( (resp:MovieAPIResponse) => {
              this.movies = resp.results
              this.setPaginatorProps(resp)         
              this.isLoading = false
            })
          break;
    }
  }

  setPaginatorProps(resp:MovieAPIResponse){
    const {totalRecords, rows} = movieHelper.setPaginatorProperties(resp)
    this.totalRecords = totalRecords
    this.rows = rows
  }

  onChangePage(event: any) {
    // seteo de nuevos valores de page y first proveniente de event de paginator
    this.page = event.page+1; // +1 pq paginator de ngprime comienza en 0
    this.first = event.first
    
    // actualiza valores de query params (page y first) para posterior exec de api call
    this.updateURLWithNewParamsWithoutReloading()
    
    // exec api call con valor de page actualizado
    this.getMovies();
  }

  updateURLWithNewParamsWithoutReloading() {
    const params = new HttpParams().appendAll({
      first: this.first,
      page: this.page
    });

    this._location.replaceState(
      location.pathname,
      params.toString()
    );
  } 

}
