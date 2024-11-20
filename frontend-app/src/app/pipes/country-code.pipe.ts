import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: string, code?: string): string {
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'AUS':
        return '+61 ' + value;
      case 'EUR':
        return '+24 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}

// "Hello".split("").reverse().join("")
