import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPais } from 'src/app/interfaces/pais.interface';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.css']
})
export class RestCountriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<IPais>;
  paises: IPais[] = [];

  displayedColumns: string[] = ['bandera', 'nombre', 'capital', 'habitantes', 'actions'];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {
    this.getPaises();
  }

  getPaises() {
    this.restService.getCountries().subscribe({
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

  verInfoPais(pais: IPais) {
    this.router.navigateByUrl('/rest/restCountriesQuery/' + pais.name.common);
  }
}
