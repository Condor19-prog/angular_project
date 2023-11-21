import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from "../models/products";

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if (!search.length) return products
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  }

}
