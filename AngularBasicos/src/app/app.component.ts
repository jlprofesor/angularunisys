import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar = true;

  get url(): string {
    return this.router.url;
  }

  constructor(private router: Router) {}

  mostrarOcultar() {
    this.mostrar = !this.mostrar;
  }
}
