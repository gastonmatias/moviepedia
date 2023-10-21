import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  private base_url = environment.apiBaseUrl
  private apiKey = environment.apiKey

  get httpHeaders(){
    return new HttpHeaders().set('Authorization',this.apiKey)
  }
  
  get httpParams(){
    return new HttpParams().set('page',10)
  }

  constructor(private httpClient:HttpClient) {}
  
  getTrendingMovies( page:number = 1 ):Observable<any> {

    return this.httpClient.get(
      `${this.base_url}/trending/movie/week`,
      // { headers:this.httpHeaders, params: this.httpParams }
      { headers:this.httpHeaders, params:{page} }
    )
  }
  
  getPopularMovies(page:number = 1):Observable<any> {
    return this.httpClient.get(
      `${this.base_url}/movie/popular`,
      {headers:this.httpHeaders, params: {page} }
    )
  }
  
  getTopRatedMovies(page:number = 1):Observable<any> {
    return this.httpClient.get(
      `${this.base_url}/movie/top_rated`,
      {headers:this.httpHeaders, params: {page} }
    )
  }
}
