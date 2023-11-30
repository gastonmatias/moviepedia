import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from 'src/app/themoviedb/themoviedb.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../interfaces/movieDetail';

@Component({
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.css']
})
export class MovieDetailPageComponent implements OnInit {

  public movie:MovieDetail | undefined;
  public idMovie:string = '1'
  public isLoading:boolean = false

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
    this.isLoading = true
    this.themoviedbService.getMovieById(+this.idMovie) //"+" convierte var id de tipo string a tipo numérico
      .subscribe( resp => {
          this.movie = resp
          this.isLoading = false
        }
      )
  }

  getImageUrl(movie: any): string {
    if (movie.poster_path===null) return '/assets/images/no_poster.png';
    // if (movie.adult) return '/assets/images/sensitive_content2.png'; // descomentar para reemplazar imagen pixeleada por este asset (y comenntar el css ".censured-image")

    return 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
  }

}
