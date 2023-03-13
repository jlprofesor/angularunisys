import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RestRoutingModule, routingComponents } from './rest.routing.module';

import { RestService } from './rest.service';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    RestRoutingModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    SharedComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [routingComponents],
  providers: [RestService]
})
export class RestModule {}
