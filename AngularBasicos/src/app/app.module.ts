import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioAvanzadoComponent } from './formulario-avanzado/formulario-avanzado.component';

@NgModule({
  declarations: [AppComponent, BindingComponent, DirectivasComponent, FormularioBasicoComponent, FormularioAvanzadoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
