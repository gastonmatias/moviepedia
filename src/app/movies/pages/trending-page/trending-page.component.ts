import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/themoviedb/themoviedb.service';
import { Movie, MovieAPIResponse } from '../../interfaces/movie';
import * as movieHelper from 'src/app/shared/helpers/movieHelper';

@Component({
  templateUrl: './trending-page.component.html',
  styles: [
  ]
})
export class TrendingPageComponent implements OnInit {
  
  public trendingMovies:Movie[] = []
  public page:number = 1
  // public trendingMovies:any =[]
  public totalRecords:number = 20
  public rows:number = 0

  constructor(
    private themoviedbService: ThemoviedbService 
  ) {}

  ngOnInit(): void {
    this.getTrendingMovies()
    // this.totalRecords = this.trendingMovies.total_results > 500*20 ? 500*20 : this.trendingMovies.total_results 
    // this.rows = this.trendingMovies.results.length // spoiler: siempre es 20
  }

  getTrendingMovies () {
    this.themoviedbService.getTrendingMovies(this.page)
      .subscribe( (resp:MovieAPIResponse) => {
        this.trendingMovies = resp.results
        const {totalRecords, rows} = movieHelper.setPaginatorProperties(resp)
        this.totalRecords = totalRecords
        this.rows = rows
      })
  }

  getPaginatorProperties(){
    
    // const {totalRecords, rows} = setPaginatorProperties()

  }
  // setPaginatorProperties(apiResponse:MovieAPIResponse){
  //   this.totalRecords = apiResponse.total_results > 500*20 ? 500*20 : apiResponse.total_results 
  //   this.rows = apiResponse.results.length // spoiler: siempre es 20

  //   return {this.totalRecords, this.rows}

  // }

  // getTrendingMovies () {
  //   this.themoviedbService.getTrendingMovies(this.page)
  //     .subscribe( (resp:MovieAPIResponse) => {
  //       this.trendingMovies = resp.results
  //       // spoiler: API moviedb LIMITA busqueda a 20 items con MAXIMO 500 paginas, luego de eso arroja error "Invalid page: Pages start at 1 and max at 500"
  //       this.totalRecords = resp.total_results > 500*20 ? 500*20 : resp.total_results 
  //       this.rows = resp.results.length // spoiler: siempre es 20
        
  //       console.log({resp});
  //     })
  // }

  onChangePage (page:number) {
    this.page=page
    // this.getTrendingMovies()
    this.themoviedbService.getTrendingMovies(this.page)
      .subscribe( (resp:MovieAPIResponse) => {
        this.trendingMovies = resp.results
      })
  }

  
}
