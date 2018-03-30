import {Component} from '@angular/core';
import {Product} from './Product';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/imges/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Runing Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/imges/products/blue-jacket.jpg',
        ['Women', 'Apperal', 'Jacket & Vests'],
        29.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/imges/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/imges/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/imges/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
  }

  productWasSelected(product: Product): void {

  }
}
