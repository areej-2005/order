
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Order } from './order.model';
import { selectAllOrders } from './order.selectors';
import { addOrder, removeOrder, updateOrderStatus } from './order.actions';
import { OrderState } from './order.reducer'; 

@Component({
  selector: 'app-order-list',
  standalone: true,  
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Order List</h2>
    <div *ngFor="let order of orders$ | async">
      <span>{{ order.name }} - {{ order.status }}</span>
      <button (click)="deleteOrder(order.id)">Remove</button>
      <button *ngIf="order.status !== 'completed'" (click)="markAsCompleted(order.id)">Mark as Completed</button>
    </div>
    <input [(ngModel)]="newOrderName" placeholder="New order name">
    <button (click)="addNewOrder()">Add Order</button>
  `,
  styles: []
})
export class OrderListComponent {
  private store = inject<Store<OrderState>>(Store); 
  orders$: Observable<Order[]> = this.store.select(selectAllOrders);
  newOrderName: string = '';
  orderService: any;

  addNewOrder() {
    if (!this.newOrderName.trim()) return;
    
    const newOrder: Order = { id: Math.random(), name: this.newOrderName, status: 'pending' };
    this.store.dispatch(addOrder({ order: newOrder }));
    this.newOrderName = '';
  }

  deleteOrder(id: number) {
    this.store.dispatch(removeOrder({ id }));
  }
  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders();
  }
  markAsCompleted(id: number) {
    this.store.dispatch(updateOrderStatus({ id, status: 'completed' }));
  }
}
