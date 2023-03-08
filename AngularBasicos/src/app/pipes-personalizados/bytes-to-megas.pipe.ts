import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesToMegas'
})
export class BytesToMegasPipe implements PipeTransform {
  transform(bytes: number): string {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
}
