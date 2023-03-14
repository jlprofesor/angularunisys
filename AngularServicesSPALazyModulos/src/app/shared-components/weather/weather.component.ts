import { Component, OnInit } from '@angular/core';
import { ITiempo } from 'src/app/interfaces/tiempo.interface';
import { SharedComponentsService } from '../shared-components.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  infoMeteo!: ITiempo;

  constructor(private sharedComponentsService: SharedComponentsService) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        this.getInfoMeteo(latitud, longitud);
      });
    }
  }

  getInfoMeteo(latitud: number, longitud: number) {
    this.sharedComponentsService.getInfoMeteo(latitud, longitud).subscribe({
      next: (data) => {
        console.log(data);
        this.infoMeteo = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }
}
