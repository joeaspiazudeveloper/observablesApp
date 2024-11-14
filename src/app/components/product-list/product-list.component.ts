import { Component, effect, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { ProductService } from '../../services/product.service';
import { ApiCall, Product } from '../../inferfaces/product';
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

  productList = signal<ApiCall | null>(null);


  constructor() {
    effect((cleanUp) => {
      const subscription = this.productService.getAllProducts()
        .subscribe((p) => this.productList.set(p))

      cleanUp(() => subscription.unsubscribe());
    });
  }

  addCart(product: Product) {
    this.cartService.addNewProduct(product);
  }
}
