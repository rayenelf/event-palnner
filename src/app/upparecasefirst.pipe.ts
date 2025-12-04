import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upparecasefirst'
})
export class UpparecasefirstPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
