import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICliente } from '../clientes.models';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @Output() onEditarCliente: EventEmitter<ICliente> = new EventEmitter();

  get clientes() {
    return this.clientesService.getClientes();
  }

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {}

  editar(cliente: ICliente) {
    this.onEditarCliente.emit(cliente);
  }
}
