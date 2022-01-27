import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bullets'
})
export class BulletsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return '⚬ ' + value;
  }

}
