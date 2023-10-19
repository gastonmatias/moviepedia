import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    HomePageComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class HomeModule { }
