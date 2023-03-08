import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { IUserLogin } from '../formulario-reactivo/user-login.interface';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  mensajeError: string = '';
  color = 'violet';
  myForm: FormGroup;
  show = false;

  constructor(private formBuilder: FormBuilder, private appService: AppService) {
    this.myForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(100)],
        [this.appService.emailLogin(true)] // Se pueden pasar argumentos aunque en este ejemplo no sean operativos
      ],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  ngOnInit() {}

  password() {
    this.show = !this.show;
  }

  login() {
    const user: IUserLogin = {
      email: this.myForm.value.email,
      password: this.myForm.value.password
    };

    this.myForm.reset();
    console.log(user);
  }

  hasError(campo: string): boolean {
    const hasError = this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched;
    return hasError || false;
  }
}
