
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.model';  

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https:http://localhost:4200/';  

  constructor(private http: HttpClient) {}


  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
}
