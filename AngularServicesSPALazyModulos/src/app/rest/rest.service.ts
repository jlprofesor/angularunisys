import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPais } from '../interfaces/pais.interface';
import { IPersona } from '../interfaces/persona.interface';

@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<IPais[]> {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all');
  }

  getCountry(pais: string): Observable<IPais[]> {
    return this.http.get<any[]>(`https://restcountries.com/v3.1/name/${pais}?fullText=true`);
  }

  getPeople(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>('./assets/people.json');
  }
}
