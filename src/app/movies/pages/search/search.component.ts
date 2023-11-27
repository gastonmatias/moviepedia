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
// import { PaginatorService } from '../../../shared/components/paginator/paginator.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  // paginator
  public movies: MovieListItem[] = [];
  public page: number = 1;
  public totalRecords: number = 20;
  public rows: number = 0;
  
  public isLoading:boolean = false
  public messages: Message[] =[];

  // obs antes de props filters
  private searchTermSubscription!: Subscription;
  private yearSubscription!: Subscription;
  private includeAdultSubscription!: Subscription;
  // private pageSubscription!: Subscription;

  // filters
  public searchTerm:string = ''
  public year = ''
  public includeAdult = false
  
  constructor(
    private searchService: SearchService,
    private themoviedbService:ThemoviedbService,
    private _location: Location,
    // private paginatorService: PaginatorService,
  ){}

  ngOnInit(): void {
    this.yearSubscription = this.searchService.yearFilter$.subscribe( year => this.year = year )
    this.includeAdultSubscription = this.searchService.includeAdultFilter$.subscribe( adult => this.includeAdult = adult )
    // this.pageSubscription = this.paginatorService.actualPage$.subscribe(resp => this.page = resp)
    this.searchTermSubscription = this.searchService.searchTerm$.subscribe( resp => { 
      this.searchTerm = resp 
      this.searchMovies()
    })
  }

  updateURLWithNewParamsWithoutReloading() {
    const params = new HttpParams().appendAll({
      q: this.searchTerm,
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
      console.log(resp);
      this.movies = resp.results
      const {totalRecords, rows} = movieHelper.setPaginatorProperties(resp) 
      this.totalRecords = totalRecords
      this.rows = rows
      this.isLoading = false
    })

    this.updateURLWithNewParamsWithoutReloading()
    
  }
  
  onChangePage(page: number) {
    this.page = page;
    // this.paginatorService.setPage(page)
    this.searchMovies()
  }

  onFilterYearChange(e:any){
    this.page = 1;
    const formattedYear = format(e, 'yyyy');
    this.searchService.setYear(formattedYear)
    this.searchMovies()
  }
  
  onChangeAdultFilter(event:any){
    let adultChecked:boolean 
    event.checked ? adultChecked = true: adultChecked = false
    this.searchService.setIncludeAdult(adultChecked)
    this.searchMovies()
  }

  onClearYearFilter(){
    this.page = 1;
    this.searchService.setYear('')
    this.searchMovies()    
  }

  ngOnDestroy(): void {
    // Desuscribirse una por una al salir del componente
    if (this.searchTermSubscription) {
      this.searchTermSubscription.unsubscribe();
    }
    if (this.yearSubscription) {
      this.yearSubscription.unsubscribe();
    }
    if (this.includeAdultSubscription) {
      this.includeAdultSubscription.unsubscribe();
    }
  }

  // //! OJO: filtra SOLO PAGINA ACTUAL, de qerer persistir debera persistir este filtro al pasar a otra pagina
  // onFilterLanguageChange(e:any){
  //   this.page = 1; // al cambiar filtro, volver a pagina 1 del paginator

  //   // se crea lista con languages seleccionados
  //   const allowedLanguages = e.value.map((e:any) => e.code)

  //   // filtra movies array con "original_language" dentro de languages seleccionados en el filtro
  //   const filteredMovies = this.movies.filter(movie => allowedLanguages.includes(movie.original_language));

  //   this.movies = filteredMovies
  //   this.isLoading = false
  // }

}
