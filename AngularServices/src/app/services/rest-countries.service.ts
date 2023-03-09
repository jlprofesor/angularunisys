import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<IPais[]> {
    return this.http.get<IPais[]>('https://restcountries.com/v3.1/all');
  }
}
