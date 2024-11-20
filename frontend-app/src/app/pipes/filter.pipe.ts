import { Pipe, PipeTransform } from '@angular/core';

interface ITodo {
  label: string;
  status: string;
}

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(todoCollection: Array<ITodo>, filteredValue: string): ITodo[] {
    console.log('[TRANFORM]');

    let resultArray = [];

    if (filteredValue === '') {
      return todoCollection;
    }

    for (let todo of todoCollection) {
      if (todo['status'] === filteredValue) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}
