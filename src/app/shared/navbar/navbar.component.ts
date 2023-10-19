import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor( public router: Router) { }


  ngOnInit() {
      this.items = [
          {
              label: 'Movies',
              icon: 'pi pi-fw pi-user',
              url: 'movies'
          },
          {
              label: 'Trending',
              icon: 'pi pi-fw pi-calendar',
              url: 'series'
          },
          {
              label: 'Popular',
              icon: 'pi pi-fw pi-calendar',
              url: 'series'
          },

      ];
  }
}
