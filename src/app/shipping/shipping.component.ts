import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShippingService } from './shipping.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(private shippingService:ShippingService) { 
  }

  ngOnInit() {
    this.shippingService.getShippings().subscribe(data => {
      this.shippingCosts = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      })
    });
  }

}