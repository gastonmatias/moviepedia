import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    MovieDetailPageComponent,
    GenericPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MoviesRoutingModule,
    PrimengModule
  ]
})
export class MoviesModule { }
