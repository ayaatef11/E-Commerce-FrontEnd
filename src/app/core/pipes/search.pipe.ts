import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../shared/interfaces/Product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products:Product[], value:string): Product[] {
    return products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
  }

}
