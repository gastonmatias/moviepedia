import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToTime'
})
export class MinutesToTimePipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
  }
}
