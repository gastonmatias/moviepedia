import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { MediaGalleryComponent } from './components/media-gallery/media-gallery.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MediaGalleryComponent,
    PaginatorComponent,
    SpinnerComponent
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
    SpinnerComponent
  ]
})
export class SharedModule { }
