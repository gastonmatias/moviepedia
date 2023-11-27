import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  // BehaviorSubject para almacenar valores actuales de variables y notificar a los observadores cuando cambien
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // filtros
  private languageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private yearSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private includeAdultSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  

  // Observables expuesto para que los componentes puedan suscribirse a los cambios
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();
  // filtros
  public language$: Observable<string> = this.languageSubject.asObservable();
  public yearFilter$: Observable<string> = this.yearSubject.asObservable();
  public includeAdultFilter$: Observable<boolean> = this.includeAdultSubject.asObservable();

  // Métodos para actualizar el valores de variables en el servicio.
  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }

  setLanguage(term: string) {
    this.languageSubject.next(term);
  }

  setYear(term: string) {
    this.yearSubject.next(term);
  }

  setIncludeAdult(term: boolean) {
    this.includeAdultSubject.next(term);
  }
}
