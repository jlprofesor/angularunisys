import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioAvanzadoComponent } from './formulario-avanzado/formulario-avanzado.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivasComponent,
    FormularioBasicoComponent,
    FormularioAvanzadoComponent,
    FormularioReactivoComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
