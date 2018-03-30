import {PriceServices} from "./price-display/price-services";

export class Product {

  service: PriceServices;
  basePrice: number;

  constructor(public sku: string,
              public name: string,
              public imageUrl: string,
              public department: string [],
              public price: number) {
  }

}
