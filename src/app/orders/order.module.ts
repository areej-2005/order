import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component'; 

@NgModule({
  declarations: [],
  imports: [CommonModule, OrderListComponent], 
  exports: [OrderListComponent] 
})
export class OrderModule {}
