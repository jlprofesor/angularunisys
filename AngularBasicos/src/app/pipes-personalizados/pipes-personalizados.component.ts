import { Component, OnInit } from '@angular/core';
import { IPersona } from './pipes.models';

@Component({
  selector: 'app-pipes-personalizados',
  templateUrl: './pipes-personalizados.component.html',
  styleUrls: ['./pipes-personalizados.component.css']
})
export class PipesPersonalizadosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  enMayusculas: boolean = true;
  bytes: number = 2000000;

  personas: IPersona[] = [
    {
      nombre: 'Juan Luis',
      trabaja: true
    },
    {
      nombre: 'Marta',
      trabaja: false
    },
    {
      nombre: 'Pedro',
      trabaja: false
    },
    {
      nombre: 'Iker',
      trabaja: false
    },
    {
      nombre: 'Samuel',
      trabaja: true
    }
  ];

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }
}
