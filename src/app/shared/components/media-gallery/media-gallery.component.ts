import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-media-gallery',
  templateUrl: './media-gallery.component.html',
  styles: [
  ]
})
export class MediaGalleryComponent {

  @Input() mediaItems: any;

}
