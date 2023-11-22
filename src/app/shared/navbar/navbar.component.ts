import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SearchService } from '../../movies/pages/search/search.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  public searchTerm: string = '';

  constructor( 
    public router: Router,
    private searchService:SearchService
  ) { }

  ngOnInit() {
      this.items = [
          {
              label: 'Trending',
              // icon: 'fa-regular fa-fire',
              icon: 'pi pi-fw pi-bolt',
              routerLink: 'movies/trending'
          },
          {
              label: 'Popular',
              // icon: 'pi pi-fw pi-thumbs-up-fill',
              icon: 'pi pi-fw pi-thumbs-up',
              routerLink: 'movies/popular'
          },
          {
              label: 'Best Rated',
              // icon: 'pi pi-fw pi-star-fill',
              icon: 'pi pi-fw pi-star',
              routerLink: 'movies/best-rated'
          },

      ];
  }

  onSearch (ev: KeyboardEvent | MouseEvent ) {
    // Si es un KeyboardEvent y la tecla es 'Enter' o es un MouseEvent y el tipo es 'click'
    if ((ev as KeyboardEvent).key==='Enter' || (ev as MouseEvent).type==='click') {
      this.searchService.setSearchTerm(this.searchTerm) // setea el serchTerm
      this.router.navigate([`/movies/search`]) //redirige a pagina search
    }
  }

}
