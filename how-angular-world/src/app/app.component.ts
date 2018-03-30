import {Component} from '@angular/core';
import {Product} from './Product';

@Component({
  selector: 'app-inventory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  product: Product;

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/imges/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'], 29.99
    );
  }

}
