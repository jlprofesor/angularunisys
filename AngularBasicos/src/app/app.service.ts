import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  // implements AsyncValidator obliga a implementar la interface validate. Por defecto irá a esta para validar

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<any[]>('./assets/people.json').pipe(
      delay(3000),
      map((resp) => {
        return resp.find((x) => x.email === email) ? { emailOcupado: true } : null;
      })
    );
  }

  emailLogin(arg: boolean): AsyncValidatorFn {
    console.log(arg);
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return this.http.get<any[]>('./assets/people.json').pipe(
        map((resp) => {
          return resp.find((x) => x.email === email) ? null : { emailNoRegistrado: true };
        })
      );
    };
  }
}
