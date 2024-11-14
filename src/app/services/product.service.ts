import { inject, Injectable } from '@angular/core';
import { ApiCall, Product } from '../inferfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)

  apiUrl = 'https://dummyjson.com/products?limit=30&select=title,price,description,category,thumbnail';

  

  getAllProducts(): Observable<ApiCall> {
    return this.http.get<ApiCall>(this.apiUrl);
  }
}
