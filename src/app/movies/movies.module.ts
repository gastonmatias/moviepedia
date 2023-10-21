import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { BestRatedPageComponent } from './pages/best-rated-page/best-rated-page.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';


@NgModule({
  declarations: [
    TrendingPageComponent,
    MovieDetailPageComponent,
    PopularPageComponent,
    BestRatedPageComponent,
    GenericPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
