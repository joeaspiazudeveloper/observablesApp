import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss'
})
export class TotalComponent {
  private cartService = inject(CartService);
  total: number = 0;

  ngOnInit() {
    this.cartService.products
    .pipe(map(products => {
      return products.reduce((prev, curr) => prev + curr.price, 0);
    }))
    .subscribe(total => {
      this.total = total;
    })
  }
}
