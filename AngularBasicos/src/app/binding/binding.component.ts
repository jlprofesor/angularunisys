import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  titulo: string = '';
  rutaImagen: string = '';
  estadoBoton: boolean = false;
  aprendiz: string = '';
  ocultarImagen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.titulo = 'Ejemplo de binding en Angular';
    this.rutaImagen = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  cambiarEstadoBoton() {
    this.estadoBoton = !this.estadoBoton;
  }

  muestraOcultaImagen() {
    this.ocultarImagen = !this.ocultarImagen;
  }
}
