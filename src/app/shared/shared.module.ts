import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { MediaGalleryComponent } from './components/media-gallery/media-gallery.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MediaGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    PrimengModule,
  ],
  exports:[
    NavbarComponent,
    MediaGalleryComponent
  ]
})
export class SharedModule { }
