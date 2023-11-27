import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieDetailPageComponent,
    GenericPageComponent,
    SearchComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MoviesRoutingModule,
    PrimengModule,
    FormsModule
  ]
})
export class MoviesModule { }
