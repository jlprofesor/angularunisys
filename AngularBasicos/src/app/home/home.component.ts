import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages = [
    {
      title: 'Binding',
      url: '/binding'
    },
    {
      title: 'Directivas',
      url: '/directivas'
    },
    {
      title: 'Formulario básico',
      url: '/form'
    },
    {
      title: 'Formulario ngModel',
      url: '/form-ngmodel'
    },
    {
      title: 'Formulario reactivo',
      url: '/form-reactivo'
    },
    {
      title: 'Pipes',
      url: '/pipes'
    },
    {
      title: 'Promesas',
      url: '/promesas'
    },
    {
      title: 'Observables',
      url: '/observables'
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  goToPage(url: string) {
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
