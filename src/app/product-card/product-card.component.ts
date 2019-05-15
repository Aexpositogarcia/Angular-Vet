import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('producto') product: Producto;
  @Input('shopping-cart') shoppingCart;
  constructor(private shoppingcartservice:ShoppingCartService) { }

  obtenercantidad(){

    if(!this.shoppingCart) console.log('No tiene cantidad');
        
    if(!this.shoppingCart) return 0;

    let item=this.shoppingCart.items[this.product.$key];

    return item ? item.cantidad:0;
    
    

  }
  anadiralcarrito(){

    this.shoppingcartservice.AñadirCompra(this.product);

  }

  eliminaralcarrito(){
    this.shoppingcartservice.EliminarCompra(this.product);
  }

}
