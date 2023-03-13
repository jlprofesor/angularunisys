import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormularioAvanzadoComponent } from './formulario-avanzado/formulario-avanzado.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables.component';
import { PipesComponent } from './pipes/pipes.component';
import { PromesasComponent } from './promesas/promesas.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'form', component: FormularioBasicoComponent },
  { path: 'form-ngmodel', component: FormularioAvanzadoComponent },
  { path: 'form-reactivo', component: FormularioReactivoComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'promesas', component: PromesasComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
