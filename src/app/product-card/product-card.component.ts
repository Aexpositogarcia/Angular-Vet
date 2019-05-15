import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto';
import { ShoppingCartService } from '../shopping-cart.service';
import { Carrito } from '../models/Carrito';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input('producto') product: Producto;
  @Input('shopping-cart') shoppingCart: Carrito;
  constructor(private shoppingcartservice:ShoppingCartService) { }

  

  anadiralcarrito(){
    this.shoppingcartservice.AñadirCompra(this.product);
    console.log(this.shoppingCart.obtenercantidad(this.product));
  }

  eliminaralcarrito(){
    this.shoppingcartservice.EliminarCompra(this.product);
  }

}
