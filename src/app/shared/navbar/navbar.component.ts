import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor( public router: Router) { }

  ngOnInit() {
      this.items = [
          {
              label: 'Trending',
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
}
