import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, filters: any): any {
    if(items && filters){
      return items.filter((items) => {
        return items.name.includes(filters.name);
      });
    }else {
      return items;
    }
  }

}
