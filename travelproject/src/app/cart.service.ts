import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items : any = [];

  constructor() { }

  addToCart(products: { quantity: number; title: any; destination:string; }){
    if(products.quantity == 0){
      products.quantity++;
      this.items.push(products);
    } else {
      for(let item of this.items){
        (item.destination == products.destination) ? item.quantity++ : null ;
      }
    }
    
  };

 
 
}