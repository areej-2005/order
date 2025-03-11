import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http'; 
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { orderReducer } from './orders/order.reducer';
import { OrderEffects } from './orders/order.effects';
import { OrderService } from './orders/order.service';




@NgModule({
  declarations: [], 
  imports: [
    HttpClientModule, 
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ orders: orderReducer }), 
    EffectsModule.forRoot([OrderEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [OrderService],
  bootstrap: []
})
export class AppModule {}