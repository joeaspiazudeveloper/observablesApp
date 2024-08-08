import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CartComponent } from "../cart/cart.component";
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ToolbarModule, SplitButtonModule, CartComponent, OverlayPanelModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
