import { Component, OnInit } from '@angular/core';
import { IPais } from '../interfaces/pais.interface';
import { RestCountriesService } from '../services/rest-countries.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.css']
})
export class RestCountriesComponent implements OnInit {
  paises: IPais[] = [];

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit() {
    this.getPaises();
  }

  getPaises() {
    this.restCountriesService.getCountries().subscribe({
      next: (data) => {
        console.log(data);
        this.paises = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }
}
