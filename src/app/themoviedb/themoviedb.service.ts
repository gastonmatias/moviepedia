import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment.development';
import { environment } from 'src/environments/environment';
import { MovieAPIResponse } from '../movies/interfaces/movieList';
import { MovieDetail } from '../movies/interfaces/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  private base_url = environment.apiBaseUrl
  private apiKey = environment.apiKey

  get httpHeaders(){
    return new HttpHeaders().set('Authorization',this.apiKey)
  }
  
  // get httpParams(){
  //   return new HttpParams().set('page',10)
  // }

  constructor(private httpClient:HttpClient) {}
  
  getTrendingMovies( page:number = 1 ):Observable<MovieAPIResponse> {

    return this.httpClient.get<MovieAPIResponse>(
      `${this.base_url}/trending/movie/week`,
      // { headers:this.httpHeaders, params: this.httpParams }
      { headers:this.httpHeaders, params:{page} }
    )
  }
  
  getPopularMovies(page:number = 1):Observable<MovieAPIResponse> {
    return this.httpClient.get<MovieAPIResponse>(
      `${this.base_url}/movie/popular`,
      {headers:this.httpHeaders, params: {page} }
    )
  }
  
  getTopRatedMovies(page:number = 1):Observable<MovieAPIResponse> {
    return this.httpClient.get<MovieAPIResponse>(
      `${this.base_url}/movie/top_rated`,
      {headers:this.httpHeaders, params: {page} }
    )
  }
  
  getMovieById(id:number):Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(
      `${this.base_url}/movie/${id}`,
      {headers:this.httpHeaders }
    )
  }
  
  searchMoviesByTerm(
    searchTerm:string, page:number = 1, year:string='',include_adult:boolean=false
  ):Observable<any> {
    return this.httpClient.get<any>(
      `${this.base_url}/search/movie`, {
        headers:this.httpHeaders, 
        params: {
          page, 
          query:searchTerm, 
          include_adult, 
          primary_release_year:year
        } 
      }
    )
  }
}
