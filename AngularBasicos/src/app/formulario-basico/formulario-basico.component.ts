import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.css']
})
export class FormularioBasicoComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  constructor() {}

  ngOnInit() {}

  save() {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
  }
}
