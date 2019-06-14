import { PipeTransform, Pipe } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
    name:'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], searchTerm: string): Product[] {
        
        if (!products || !searchTerm) {
            return products;
        }

        return products.filter(products =>
            products.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

}