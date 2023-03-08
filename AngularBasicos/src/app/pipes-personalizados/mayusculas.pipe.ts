import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})

// Todo pipe debe implementar PipeTransform
export class MayusculasPipe implements PipeTransform {
  transform(valor: string, enMayusculas: boolean = true): string {
    return enMayusculas ? valor.toUpperCase() : valor.toLocaleLowerCase();
  }
}
