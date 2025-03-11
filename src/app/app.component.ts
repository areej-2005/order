import { Component } from '@angular/core';
import { OrderListComponent } from './orders/order-list.component';


@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [OrderListComponent],
  
  template: `
    <h2>Order List</h2>
    <app-order-list></app-order-list>
  `,
  
})
export class AppComponent {
  title = 'ngrx-order-app';
}