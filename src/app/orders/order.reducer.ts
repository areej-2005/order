import { createReducer, on } from '@ngrx/store';
import { Order } from './order.model';
import { addOrder, removeOrder, loadOrdersSuccess, loadOrdersFailure } from './order.actions';

export interface OrderState {
  orders: Order[];
  error: string | null;  
}

const initialState: OrderState = {
  orders: [],
  error: null,  
};

export const orderReducer = createReducer(
  initialState,
  on(addOrder, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
  })),
  on(removeOrder, (state, { id }) => ({
    ...state,
    orders: state.orders.filter(order => order.id !== id),
  })),
  on(loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders, 
    error: null, 
  })),
  on(loadOrdersFailure, (state, { error }) => ({
    ...state,
    error, 
  }))
);