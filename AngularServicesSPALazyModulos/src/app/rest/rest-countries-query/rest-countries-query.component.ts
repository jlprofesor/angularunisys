import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPais } from 'src/app/interfaces/pais.interface';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest-countries-query',
  templateUrl: './rest-countries-query.component.html',
  styleUrls: ['./rest-countries-query.component.css']
})
export class RestCountriesQueryComponent implements OnInit, OnDestroy {
  parametros!: Subscription;
  paisConsulta: string = '';
  pais: IPais[] = [];

  constructor(private restService: RestService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.parametros = this.activatedRoute.params.subscribe((params) => (this.paisConsulta = params['pais']));
    this.getPais(this.paisConsulta);
  }

  ngOnDestroy() {
    this.parametros.unsubscribe();
  }

  getPais(pais: string) {
    this.restService.getCountry(pais).subscribe({
      next: (data) => {
        console.log(data);
        this.pais = data;
      },
      error: (err) => console.log(err)
    });
  }
}
