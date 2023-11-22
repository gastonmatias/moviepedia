import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ThemoviedbService } from '../../../themoviedb/themoviedb.service';
import { MovieAPIResponse, MovieListItem } from '../../interfaces/movieList';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public searchTerm:string = ''
  public movies: MovieListItem[] = [];
  public page: number = 1;
  public totalRecords: number = 20;
  public rows: number = 0;
  public isLoading:boolean = false
  public messages: Message[] =[];

  constructor(
    private searchService: SearchService,
    private themoviedbService:ThemoviedbService
  ){}


  ngOnInit(): void {
    this.messages =  [{ severity: 'error', summary: 'Oops!', detail: 'No movies found with search term!' }],
    this.searchService.searchTerm$.subscribe( resp => {
      this.searchTerm = resp
      this.searchMovies()
    })
  }

  searchMovies(){

    const sanitizedSearchTerm = this.searchTerm.trim()

    if (sanitizedSearchTerm.length===0) return;

    this.isLoading = true
    this.themoviedbService.searchMoviesByTerm(sanitizedSearchTerm, this.page).subscribe(resp => {
      console.log(resp);
      this.movies = resp.results
      this.setPaginatorProperties(resp)
      this.isLoading = false
    })
    
  }

  onChangePage(page: number) {
    this.page = page;
    this.searchMovies()
    
  }

  setPaginatorProperties(resp:MovieAPIResponse){
    const totalRecords = resp.total_results > 500*20 ? 500*20 : resp.total_results // spoiler: API moviedb LIMITA busqueda a 20 items con MAXIMO 500 paginas, luego de eso arroja error "Invalid page: Pages start at 1 and max at 500"
    const rows = resp.results.length // spoiler: siempre es 20
    
    this.totalRecords = totalRecords
    this.rows = rows
  }




  

}
