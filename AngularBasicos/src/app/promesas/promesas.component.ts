import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {
  url = './assets/people.json';

  constructor() {}

  ngOnInit() {
    this.getPeople();
    this.getPeopleAsyncAwait();
  }

  getPeople() {
    fetch(this.url)
      .then((resp: Response) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  async getPeopleAsyncAwait() {
    try {
      const resp: Response = await fetch(this.url);
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
