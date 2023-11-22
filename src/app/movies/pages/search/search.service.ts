import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  // BehaviorSubject para almacenar el valor actual de searchTerm y notificar a los observadores cuando cambia.
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  // Observable expuesto para que los componentes puedan suscribirse a los cambios en searchTerm.
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  // Método para actualizar el valor de searchTerm en el servicio.
  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}
