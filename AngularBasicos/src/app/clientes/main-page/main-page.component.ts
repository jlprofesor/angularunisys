import { Component, OnInit } from '@angular/core';
import { ICliente } from '../clientes.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  cliente: ICliente = {
    id: 0,
    nombre: '',
    facturacion: 0
  };

  editar: boolean = false;

  constructor() {}

  ngOnInit() {}

  clienteAgregado(cliente: ICliente) {
    alert('Cliente ' + cliente.nombre + ' agregado/modificado con éxito');
  }

  editarCliente(cliente: ICliente) {
    this.cliente = cliente;
    this.editar = true;
  }
}
