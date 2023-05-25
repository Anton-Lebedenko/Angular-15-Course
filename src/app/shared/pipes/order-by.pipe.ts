import { Pipe, PipeTransform } from '@angular/core';

function getProperty(obj: any, property: string[]): any {
  let prop: any = obj;
  for(let i: number = 0; i < property.length; i++) {
    prop = prop[property[i]];
    if(!obj) break;
  }
  return prop;
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform<T>(array: T[], properties: string[][], isDescending: boolean = true): T[] {
    if (!array || !properties || properties.length === 0) {
      return array;
    }
    const compare = (a: any, b: any, propertyIndex: number): number => {
      const property: string[] = properties[propertyIndex];
      const valueA = getProperty(a, property);
      const valueB = getProperty(b, property);

      if (valueA < valueB) {
        return isDescending ? 1 : -1;
      } else if (valueA > valueB) {
        return isDescending ? -1 : 1;
      } else {
        // Values are equal, compare the next property
        if (propertyIndex < properties.length - 1) {
          return compare(a, b, propertyIndex + 1);
        } else {
          return 0;
        }
      }
    };

    return array.sort((a: T, b: T) => compare(a, b, 0));
  }
}
