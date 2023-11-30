import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieListItem } from 'src/app/movies/interfaces/movieList';

@Component({
  selector: 'shared-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.css']
})

export class MediaGalleryComponent {
  
  @Input() mediaItems:MovieListItem[] = [];

  constructor(
    private router: Router
  ) {}

  onClickItem(item:MovieListItem){
    this.router.navigate([`/movies/${item.id}`])
  }

  getImageUrl(item: any): string {
    if (item.poster_path===null) return '/assets/images/no_poster.png';
    if (item.adult) return '/assets/images/sensitive_content2.png';

    return 'https://image.tmdb.org/t/p/w500/' + item.poster_path;
  }

}
