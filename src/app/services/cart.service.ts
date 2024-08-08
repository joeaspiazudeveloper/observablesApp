import { Injectable } from '@angular/core';
import { Product } from '../inferfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carProducts: Product[] = [];

  private _products: BehaviorSubject<Product[]>; 

  constructor() {
    this._products = new BehaviorSubject<Product[]>([]);
   }

   get products() {
    return this._products.asObservable();
   }

   addNewProduct(product: Product) {
    this.carProducts.push(product);
    this._products.next(this.carProducts);
   }

   removeProduct(product: Product) {
    // first search index and then remove with splice
    this.carProducts.splice(this.carProducts.findIndex(p => p.id === product.id), 1);
    this._products.next(this.carProducts);
   }
}
