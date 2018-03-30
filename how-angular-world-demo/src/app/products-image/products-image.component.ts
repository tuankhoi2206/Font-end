import {Component, HostBinding, Input} from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'products-image',
  template: '<img class="product-image" [src]="product.imageUrl">',
  styleUrls: ['./products-image.component.css']
})
export class ProductsImageComponent {

  @HostBinding('attr.class')
  cssClass = 'ui small image';

  @Input()
  product: Product;

  constructor() {
  }

}
