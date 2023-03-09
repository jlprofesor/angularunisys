import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  nombre: string = 'Juan Luis';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    // Lo primero que se ejecuta es el constructor. Haremos inyecciones de dependencia o inicializaciones antes de que se inicialice el DOM
    console.log('constructor');
  }

  ngOnInit(): void {
    // ngOnInit: El componente ya está inicializado y tenemos acceso al DOM. Se suele utilizar para realizar peticiones http iniciales
    console.log('ngOnInit');

    // ngDoCheck, ngAfterContentChecked y ngAfterViewChecked se ejecutan con el timer porque segundos forma parte del componente y detecta cambios en la propiedad
    this.timerSubscription = interval(1000).subscribe((i) => {
      this.segundos = i;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Funciona cuando el componente tiene únicamente propiedades @Input()
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    // Se ejecuta cuando hay detección de cambios, antes de hacer los cambios. Probarlo cambiando el input del nombre
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    // Se ejecuta una vez después del ngOninit. No depende de detecciones de cambios posteriores.
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // Se ejecuta cuando hay detección de cambios, después de hacer los cambios. Probarlo cambiando el input del nombre
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // Se ejecuta una vez después del ngAfterContentInit. No depende de detecciones de cambios posteriores.
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // Se ejecuta cuando hay detección de cambios, una vez hechos los cambios y están verificados. Probarlo cambiando el input del nombre
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // Se produce cuando el componente se destruye. Se suele utilizar para limpiar escuchas (Observables)
    // timerSubscription es la referencia al observable
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');
  }
}
