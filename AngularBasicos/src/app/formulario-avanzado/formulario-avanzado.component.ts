import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from './user.interface';

@Component({
  selector: 'app-formulario-avanzado',
  templateUrl: './formulario-avanzado.component.html',
  styleUrls: ['./formulario-avanzado.component.css']
})
export class FormularioAvanzadoComponent implements OnInit {
  @ViewChild('f') miFormulario!: NgForm;

  user!: IUser;

  generos = [
    { value: 'M', display: 'Mujer' },
    { value: 'H', display: 'Hombre' },
    { value: 'O', display: 'Otro' }
  ];

  roles = [
    { value: 'admin', display: 'Administrador' },
    { value: 'guest', display: 'Invitado' },
    { value: 'custom', display: 'Otro' }
  ];

  aficiones = [
    { value: 'game', display: 'Gaming' },
    { value: 'tech', display: 'Tecnología' },
    { value: 'life', display: 'Lifestyle' }
  ];

  // Aquí el componente

  // El código visual estará en el archivo app.component.html que luego veremos.
  // La clase del componente AppComponent implementa la interface OnInit.
  // Esta interface obliga a incluir el método ngOnInit que inicia el modelo con unos valores por defecto.
  // Se exponen varios atributos. El atributo user que será de tipo IUser y otros que van a servir para configurar
  // y dar aspecto a algunos elementos del formulario.
  // El método save registrará el usuario si el formulario es válido.

  constructor() {}

  ngOnInit() {
    // Inicialización del modelo
    this.user = {
      nombre: '',
      edad: 0,
      genero: this.generos[0].value, // Mujer por defecto
      rol: this.roles[1].value,
      activo: false,
      aficiones: [this.aficiones[1].value] // Tecnología por defecto
    };
  }

  edadNoValida(): boolean {
    if (this.miFormulario?.controls.edad) {
      const noValida = this.miFormulario?.controls.edad.touched && this.miFormulario?.controls.edad.value <= 0;
      noValida
        ? this.miFormulario?.controls.edad.setErrors({ edad: true })
        : this.miFormulario?.controls.edad.setErrors(null);
      return noValida;
    }
    return true;
  }

  save(f: IUser, isValid: boolean | null) {
    if (!isValid) return;
    console.log(f);
    this.miFormulario.reset();
    // this.miFormulario.reset({ edad: 0 });
  }
}
