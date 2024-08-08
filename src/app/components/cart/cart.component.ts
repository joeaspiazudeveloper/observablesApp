import { Component, inject, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';


import { CartService } from '../../services/cart.service';
import { Product } from '../../inferfaces/product';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonModule, TotalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  private cartService = inject(CartService);
  
  productsToCart: Product[] = [];

  ngOnInit() {
    this.cartService.products.subscribe(products => {
      console.log(products);
      this.productsToCart = products;
    })
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
  }

}
