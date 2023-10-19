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
    return new HttpParams().set('limit',10)
  }

  constructor(private httpClient:HttpClient) {}
  
  getTrendingMovies():Observable<any> {

    return this.httpClient.get(
      `${this.base_url}/trending/movie/week`,
      {headers:this.httpHeaders, params: this.httpParams}
    )
  }
  
  getPopularMovies():Observable<any> {
    return this.httpClient.get(
      `${this.base_url}/movie/popular`,
      {headers:this.httpHeaders, params: this.httpParams}
    )
  }
  
  getTopRatedMovies():Observable<any> {
    return this.httpClient.get(
      `${this.base_url}/movie/top_rated`,
      {headers:this.httpHeaders, params: this.httpParams}
    )
  }
}
