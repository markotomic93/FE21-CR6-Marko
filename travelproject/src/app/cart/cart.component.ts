import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  total: number = 0;
  checkoutForm: any;
  constructor(public cartService: CartService, private formBuilder: FormBuilder) {this.checkoutForm = this.formBuilder.group({

      name:'',
      address:'',
      phone:'',
      email:''
 
    });
  }

  onSubmit(customerData: any) {

    // Process checkout data here
    alert(" Your Purchase has been completed")
    console.warn('Your order has been submitted', customerData);
    this.items = this.clearCart();
    this.checkoutForm.reset();
  
  }
 


//Function clears the Cart

  clearCart(){
    for (let products of this.cartService.items) {
      products.quantity = 0;
    }
    this.cartService.items= [];
  };

//Subtracting ammount of 


  lessInCard( products: { quantity: number; },i: any ){
    if(products.quantity == 1){
      products.quantity--;
      this.cartService.items.splice(i,1)
    }else {
      products.quantity --;
    }
  }
  remove( products: { quantity: number; },i: any ){
    products.quantity = 0;
    this.cartService.items.splice(i,1);
  }

//         Showing the total Sum of added Destinations 
  TotalSum() {
    let total = 0;
    for(let item of this.cartService.items){
      total += (item.quantity * item.price);
    }
    return total;
  }

  //        Calculating Discount
  calcDiscount(){
    let discTotal = this.TotalSum();
    if (discTotal <=200){
      return 0;
    }
    else if (discTotal <=500){
      discTotal= discTotal*10/100;
      return discTotal;
    }
    else {
      discTotal= discTotal*20/100;
      return discTotal;
    }
  }


  

  ngOnInit(): void {}

}


