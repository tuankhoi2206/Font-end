import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'products-row',
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.css']
})
export class ProductsRowComponent implements OnInit {

  @Input()
  product: Product;
  @HostBinding('attr.class')
  cssClass = 'item';

  constructor() {
  }

  ngOnInit() {
  }

}
