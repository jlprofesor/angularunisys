import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITiempo } from '../interfaces/tiempo.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedComponentsService {
  constructor(private http: HttpClient) {}

  getInfoMeteo(latitud: number, longitud: number): Observable<ITiempo> {
    return this.http.get<ITiempo>(
      'https://api.openweathermap.org/data/2.5/weather/?lat=' +
        latitud +
        '&lon=' +
        longitud +
        '&units=metric&lang=es&&appid=465e4140ae934b0f49e4391d27218dfe'
    );
  }
}
