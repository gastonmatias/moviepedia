import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThemoviedbService } from 'src/app/themoviedb/themoviedb.service';
import { Movie, MovieAPIResponse, MoviePageType } from '../../interfaces/movie';
import * as movieHelper from 'src/app/shared/helpers/movieHelper';

@Component({
  templateUrl: './generic-page.component.html',
})
export class GenericPageComponent implements OnInit {
  
  public movies: Movie[] = [];
  public page: number = 1;
  public totalRecords: number = 20;
  public rows: number = 0;
  public pageType: string = '';
  public title: string = '';
  public isLoading:boolean = true

  constructor(
    private themoviedbService: ThemoviedbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const currentPath = this.route.snapshot.url[0].path;
    this.pageType     = movieHelper.getPageType(currentPath)!
    this.title        = movieHelper.setPageTitle(this.pageType)!
    this.getMovies();

    console.log({route:this.route.snapshot});
  }

  getMovies() {
    this.isLoading = true

    switch (this.pageType) {
      case MoviePageType.trending:
        this.themoviedbService.getTrendingMovies(this.page)
          .subscribe( (resp:MovieAPIResponse) => {
            this.movies = resp.results
            this.setPaginatorProperties(resp)         
            this.isLoading = false
          })
          break;

      case MoviePageType.popular:
          this.themoviedbService.getPopularMovies(this.page)
            .subscribe( (resp:MovieAPIResponse) => {
              this.movies = resp.results
              this.setPaginatorProperties(resp)
              this.isLoading = false         
            })
            break;
      
      case MoviePageType.bestRated:
          this.themoviedbService.getTopRatedMovies(this.page)
            .subscribe( (resp:MovieAPIResponse) => {
              this.movies = resp.results
              this.setPaginatorProperties(resp)         
              this.isLoading = false
            })
          break;
    }
  }

  setPaginatorProperties(resp:MovieAPIResponse){
    const totalRecords = resp.total_results > 500*20 ? 500*20 : resp.total_results // spoiler: API moviedb LIMITA busqueda a 20 items con MAXIMO 500 paginas, luego de eso arroja error "Invalid page: Pages start at 1 and max at 500"
    const rows = resp.results.length // spoiler: siempre es 20
    
    this.totalRecords = totalRecords
    this.rows = rows
  }

  onChangePage(page: number) {
    this.page = page;
    this.getMovies();
  }
}
