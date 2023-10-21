import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/movies/interfaces/movie';

@Component({
  selector: 'shared-media-gallery',
  templateUrl: './media-gallery.component.html',
})

export class MediaGalleryComponent {
  
  @Input() mediaItems:Movie[] = [];
  
}
