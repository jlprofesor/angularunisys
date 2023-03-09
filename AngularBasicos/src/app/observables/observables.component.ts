import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  url = './assets/people.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.getPeopleObservable().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => console.log(err),
      complete: () => console.log('OK')
    });
  }

  getPeopleObservable(): Observable<any[]> {
    // return this.http.get<any[]>(this.url);
    return this.http.get<any[]>(this.url).pipe(
      map((x) => {
        return x.filter((x) => x.nombre.startsWith('A'));
      })
    );
  }
}
