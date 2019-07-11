import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingService } from './shipping/shipping.service';
import { Shipping } from './shipping/shipping.model';
@Injectable({
    providedIn: 'root'
})
export class CartService  {
items = [];
shippings;
 
  constructor( private http: HttpClient, private shippingService: ShippingService) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}