import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPais } from '../interfaces/pais.interface';
import { RestCountriesService } from '../services/rest-countries.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.css']
})
export class RestCountriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<IPais>;
  paises: IPais[] = [];

  displayedColumns: string[] = ['bandera', 'nombre', 'capital', 'habitantes'];

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit() {
    this.getPaises();
  }

  getPaises() {
    this.restCountriesService.getCountries().subscribe({
      next: (data) => {
        console.log(data);
        this.paises = data;
        this.dataSource = new MatTableDataSource<IPais>(this.paises);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }
}
