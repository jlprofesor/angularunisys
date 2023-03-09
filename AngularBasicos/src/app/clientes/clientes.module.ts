import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ClientesService } from './clientes.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MainPageComponent, ClientesComponent, AgregarComponent],
  exports: [MainPageComponent],
  providers: [ClientesService]
})
export class ClientesModule {}
