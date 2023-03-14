import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPersona } from 'src/app/interfaces/persona.interface';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<IPersona>;
  personas: IPersona[] = [];

  displayedColumns: string[] = ['foto', 'nombre', 'apellido', 'email'];

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas() {
    this.restService.getPeople().subscribe({
      next: (data) => {
        console.log(data);
        this.personas = data;
        this.dataSource = new MatTableDataSource<IPersona>(this.personas);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }
}
