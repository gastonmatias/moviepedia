import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  // BehaviorSubject para almacenar valor actual de variable y notificar a los observadores cuando cambie
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Observable expuesto para que los componentes puedan suscribirse a los cambios
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  // Métodos para actualizar el valores de variables en el servicio.
  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}
