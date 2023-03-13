import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPersona } from '../interfaces/persona.interface';
import { RestCountriesService } from '../services/rest-countries.service';

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

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas() {
    this.restCountriesService.getPeople().subscribe({
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
