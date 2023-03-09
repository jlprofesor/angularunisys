import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICliente } from '../clientes.models';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit, OnChanges {
  @Input() cliente: ICliente = {
    id: 0,
    nombre: '',
    facturacion: 0
  };

  @Input() edit: boolean = false;

  @Output() onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();
  @Output() onModificadoCliente: EventEmitter<ICliente> = new EventEmitter();

  constructor(private clientesService: ClientesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Puede ser útil para reaccionar a cambios. Por ejemplo, si queremos hacer una petición http cuando cambie cierto valor
    console.log('cambios detectados', changes);
  }

  ngOnInit() {}

  agregar() {
    if (this.cliente.nombre.trim().length === 0) {
      return;
    }

    if (this.edit) {
      this.clientesService.modificarCliente(this.cliente);
      this.onModificadoCliente.emit(this.cliente);
    } else {
      this.clientesService.agregarCliente(this.cliente);
      this.onNuevoCliente.emit(this.cliente);
    }

    this.cliente = {
      id: 0,
      nombre: '',
      facturacion: 0
    };
  }
}
