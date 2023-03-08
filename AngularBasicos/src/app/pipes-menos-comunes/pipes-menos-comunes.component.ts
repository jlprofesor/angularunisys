import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipes-menos-comunes',
  templateUrl: './pipes-menos-comunes.component.html',
  styleUrls: ['./pipes-menos-comunes.component.css']
})
export class PipesMenosComunesComponent implements OnInit {
  ngOnInit() {}

  // i18nSelect
  nombre: string = 'Juan Luis';
  genero: string = 'masculino';
  invitacionSpecs = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  // other para otras opciones. # pone el número actual
  clientes: string[] = ['Marta', 'Juan Luis', 'María', 'Pedro', 'Iker'];
  clientesSpecs = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.'
  };

  cambiarCliente() {
    this.nombre = 'Ana';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Juan Luis',
    edad: 35,
    direccion: 'Pamplona, Navarra'
  };

  // JsonPipe
  personas = [
    {
      nombre: 'Juan Luis',
      trabaja: true
    },
    {
      nombre: 'Marta',
      trabaja: false
    },
    {
      nombre: 'Pedros',
      trabaja: true
    }
  ];

  // Async Pipe. Para procesos asíncronos (observables y promesas)
  // interval emite valores numéricos sucesivos 0,1,2,3,4,5,6,
  // el pipe async se suscribe al observable

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });
}
