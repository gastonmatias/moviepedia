import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/themoviedb/themoviedb.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../interfaces/movieDetail';

@Component({
  templateUrl: './movie-detail-page.component.html',
  styles: [
  ]
})
export class MovieDetailPageComponent implements OnInit {

  public movie:MovieDetail | undefined;
  public idMovie:string = '1'

  constructor(
    private themoviedbService: ThemoviedbService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const idPath = this.route.snapshot.url[0].path;
    this.idMovie = idPath

    this.getMovie()
  }

  getMovie(){
    this.themoviedbService.getMovieById(+this.idMovie) //"+" convierte var id de tipo string a tipo numérico
      .subscribe( resp => {
        this.movie = resp
        console.log(this.movie)
      }
      )
  }

}
