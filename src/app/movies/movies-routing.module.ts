import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericPageComponent } from './pages/generic-page/generic-page.component';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [ // www.screenpedia.com/movies/...
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
    path:'search', // search antes de ":id" para evitar solapacion
    component:SearchComponent,
  },
  { 
    path:':id', 
    component:MovieDetailPageComponent,
    data: { pageType:'movie-detail'} 
  },
  {
    path: '**',
    redirectTo: 'trending'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
