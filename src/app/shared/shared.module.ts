import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { NavbarComponent } from './navbar/navbar.component';
import {  RouterLink } from '@angular/router';
import { MediaGalleryComponent } from './components/media-gallery/media-gallery.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MinutesToTimePipe } from './pipes/minutes-to-time.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    MediaGalleryComponent,
    PaginatorComponent,
    SpinnerComponent,
    MinutesToTimePipe,
  ],
  imports: [
    CommonModule,
    RouterLink,
    PrimengModule,
  ],
  exports:[
    NavbarComponent,
    MediaGalleryComponent,
    PaginatorComponent,
    SpinnerComponent,
    MinutesToTimePipe
  ]
})
export class SharedModule { }
