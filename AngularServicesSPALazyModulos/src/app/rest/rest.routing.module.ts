import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestCountriesComponent } from './rest-countries/rest-countries.component';
import { RestCountriesQueryComponent } from './rest-countries-query/rest-countries-query.component';
import { RestComponent } from './rest.component';
import { PersonasComponent } from './personas/personas.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RestComponent,
    children: [
      { path: '', redirectTo: '/rest/restCountries', pathMatch: 'full' },
      { path: 'restCountries', component: RestCountriesComponent },
      { path: 'personas', component: PersonasComponent },
      {
        path: 'restCountriesQuery/:pais',
        component: RestCountriesQueryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RestRoutingModule {}

export const routingComponents = [
  RestComponent,
  PersonasComponent,
  RestCountriesComponent,
  RestCountriesQueryComponent
];
