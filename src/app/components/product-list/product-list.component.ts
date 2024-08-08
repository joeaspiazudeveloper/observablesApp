import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { ProductService } from '../../services/product.service';
import { Product } from '../../inferfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ButtonModule, CardModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  productList: Product[] = [];

  ngOnInit() {
    this.productService.getAllProducts().subscribe(res => {
      this.productList = res.products;
      console.log(res);
    })
  }

  addCart(product: Product) {
    this.cartService.addNewProduct(product);
  }
}
