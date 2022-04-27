import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creatorName'
})
export class CreatorNamePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value === 'Ivan') {
      return 'You'
    }
    return value;
  }

}
