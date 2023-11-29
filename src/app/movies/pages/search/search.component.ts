import {  Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ThemoviedbService } from '../../../themoviedb/themoviedb.service';
import { MovieListItem } from '../../interfaces/movieList';
import { Message } from 'primeng/api';
import * as movieHelper from 'src/app/shared/helpers/movieHelper';
import { format } from 'date-fns';
import { Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  // paginator
  public movies: MovieListItem[] = [];
  public page: number = 1;
  public totalRecords: number = 20;
  public rows: number = 0;
  public first: number = 0;
  
  public isLoading:boolean = false
  public messages: Message[] =[];

  // obs para manejar el search qe provee el servicio searchService
  private searchTermSubscription!: Subscription;

  // filters
  public searchTerm:string = ''
  public year:string = ''
  public includeAdult:boolean = false
  
  constructor(
    private themoviedbService:ThemoviedbService,
    private _location: Location,
    private activatedRoute:ActivatedRoute,
    private searchService:SearchService
  ){}

  ngOnInit(): void {
    //! obtener page y first desde query params
    this.activatedRoute.queryParams.subscribe( params => {
      const pageParam = params['page']
      const firstParam = params['first']
      const yearParam = params['year']
      const includeAdultParam = params['includeAdult']
      
      this.page = +pageParam
      this.first = +firstParam
      this.year = yearParam
      this.includeAdult = includeAdultParam==='true' ? true : false
    })
    
    //! filtro searchterm + exec api call
    this.searchTermSubscription = this.searchService.searchTerm$.subscribe( resp => { 
      this.searchTerm = resp 
      this.searchMovies()
    })
  }

  updateURLWithNewParamsWithoutReloading() {
    const params = new HttpParams().appendAll({
      q: this.searchTerm,
      page: this.page,
      first: this.first,
      year: this.year,
      includeAdult: this.includeAdult
    });

    this._location.replaceState(
      location.pathname,
      params.toString()
    );
  } 

  searchMovies(){
    const sanitizedSearchTerm = this.searchTerm.trim()
    if (sanitizedSearchTerm.length===0) return;

    this.isLoading = true

    this.themoviedbService.searchMoviesByTerm(sanitizedSearchTerm, this.page,this.year,this.includeAdult)
      .subscribe(resp => {
      this.movies = resp.results
      const {totalRecords, rows} = movieHelper.setPaginatorProperties(resp) 
      this.totalRecords = totalRecords
      this.rows = rows
      this.isLoading = false
    })
    
    this.updateURLWithNewParamsWithoutReloading()
  }
  
  onChangePage(event: any) {
    this.page = event.page+1 // +1 pq paginator de ngprime comienza en 0k
    this.first = event.first
    this.searchMovies()
  }

  onChangeAdultFilter(event:any){
    let adultChecked:boolean 
    event.checked ? adultChecked = true: adultChecked = false
    this.includeAdult = adultChecked
    this.resetPageAndFirst()
    this.searchMovies()
  }
  
  onFilterYearChange(e:any){
    this.resetPageAndFirst()
    const formattedYear = format(e, 'yyyy');
    this.year = formattedYear
    this.searchMovies()
  }

  onClearYearFilter(){
    this.resetPageAndFirst()
    this.year = ''
    this.searchMovies()    
  }

  resetPageAndFirst(){
    this.page = 1
    this.first = 0
  }

  ngOnDestroy(): void {
    // Desuscribirse una por una al salir del componente
    if (this.searchTermSubscription) {
      this.searchTermSubscription.unsubscribe();
    }
  }
}
