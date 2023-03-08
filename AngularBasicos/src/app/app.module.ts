import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioAvanzadoComponent } from './formulario-avanzado/formulario-avanzado.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { ErrorMsgDirective } from './formulario-login/error-msg.directive';
import { FormularioReactivoDinamicoComponent } from './formulario-reactivo-dinamico/formulario-reactivo-dinamico.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesMenosComunesComponent } from './pipes-menos-comunes/pipes-menos-comunes.component';
import { PipesPersonalizadosComponent } from './pipes-personalizados/pipes-personalizados.component';
import { MayusculasPipe } from './pipes-personalizados/mayusculas.pipe';
import { TrabajaPipe } from './pipes-personalizados/trabaja.pipe';
import { BytesToMegasPipe } from './pipes-personalizados/bytes-to-megas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivasComponent,
    FormularioBasicoComponent,
    FormularioAvanzadoComponent,
    FormularioReactivoComponent,
    FormularioLoginComponent,
    ErrorMsgDirective,
    FormularioReactivoDinamicoComponent,
    PipesComponent,
    PipesMenosComunesComponent,
    PipesPersonalizadosComponent,
    MayusculasPipe,
    TrabajaPipe,
    BytesToMegasPipe
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
