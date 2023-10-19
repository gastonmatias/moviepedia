import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './movie-detail-page.component.html',
  styles: [
  ]
})
export class MovieDetailPageComponent {

  @Input() movieItem:any
}
