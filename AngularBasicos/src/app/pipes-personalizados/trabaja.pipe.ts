import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trabaja'
})

// Todo pipe debe implementar PipeTransform
export class TrabajaPipe implements PipeTransform {
  transform(valor: boolean): string {
    return valor ? 'trabaja' : 'no trabaja';
  }
}
