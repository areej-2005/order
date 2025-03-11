import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { OrderService } from './order.service';
import { loadOrders, loadOrdersSuccess, loadOrdersFailure } from './order.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class OrderEffects {

  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders), 
      mergeMap(() =>
        this.orderService.getOrders().pipe( 
          map(orders => loadOrdersSuccess({ orders })), 
          catchError((error) => of(loadOrdersFailure({ error }))) 
        )
      )
    )
  );
}
