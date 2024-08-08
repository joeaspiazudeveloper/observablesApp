import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCall, Product } from '../inferfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpClient);

  apiUrl = 'https://dummyjson.com/products?limit=30&select=title,price,description,category,thumbnail';

  constructor() { }

  getAllProducts(): Observable<ApiCall> {
    return this.http.get<ApiCall>(this.apiUrl);
  }
}
