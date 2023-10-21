import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingPageComponent } from './pages/trending-page/trending-page.component';
import { PopularPageComponent } from './pages/popular-page/popular-page.component';
import { BestRatedPageComponent } from './pages/best-rated-page/best-rated-page.component';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';

const routes: Routes = [
  { 
    path:'trending', 
    component:GenericPageComponent,
    data: { pageType:'trending'} 
  },
  { 
    path:'popular', 
    component:GenericPageComponent,
    data: { pageType:'popular'} 
  },
  { 
    path:'best-rated', 
    component:GenericPageComponent,
    data: { pageType:'best-rated'} 
  },
  {
    path: '**',
    redirectTo: 'trending'
  }
];

// const routes: Routes = [
//   { path:'trending', component:TrendingPageComponent },
//   { path:'popular', component:PopularPageComponent },
//   { path:'best-rated', component:BestRatedPageComponent },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
