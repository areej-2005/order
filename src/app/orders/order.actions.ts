import { createAction, props } from '@ngrx/store';
import { Order } from './order.model';


export const loadOrders = createAction('[Order] Load Orders');
export const loadOrdersSuccess = createAction('[Order] Load Orders Success', props<{ orders: Order[] }>());
export const loadOrdersFailure = createAction('[Order] Load Orders Failure', props<{ error: string }>());


export const addOrder = createAction('[Order] Add Order', props<{ order: Order }>());


export const removeOrder = createAction('[Order] Remove Order', props<{ id: number }>());

export const updateOrderStatus = createAction(
  '[Order] Update Order Status',
  props<{ id: number, status: string }>()
);