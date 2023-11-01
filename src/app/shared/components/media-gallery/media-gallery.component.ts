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

  onImageClick(item:MovieListItem){
    console.log(item);
    this.router.navigate([`/movies/${item.id}`])
  }
  
}
