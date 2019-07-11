import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Shipping } from './shipping.model';


@Injectable()
export class ShippingService {

  constructor(private firestore: AngularFirestore) { }

  getShippings() {
    return this.firestore.collection('shippings').snapshotChanges();
}

createShipping(shipping: Shipping){
    return this.firestore.collection('shippings').add(shipping);
}

updateShipping(shipping: Shipping){
    delete shipping.id;
    this.firestore.doc('shippings/' + shipping.id).update(shipping);
}

deletePolicy(shippingId: number){
    this.firestore.doc('shippings/' + shippingId).delete();
}

}