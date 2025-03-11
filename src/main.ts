import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { orderReducer } from './app/orders/order.reducer';
import { OrderEffects } from './app/orders/order.effects';
import { HttpClientModule } from '@angular/common/http';  
import { OrderModule } from './app/orders/order.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    importProvidersFrom(StoreModule.forRoot({ orders: orderReducer })),  
    importProvidersFrom(EffectsModule.forRoot([OrderEffects])), 
    importProvidersFrom(HttpClientModule),  
    importProvidersFrom(OrderModule)  
  ]
}).catch(err => console.error(err));