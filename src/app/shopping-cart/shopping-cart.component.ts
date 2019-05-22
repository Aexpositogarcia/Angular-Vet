import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { Carrito } from '../models/Carrito';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  carrito$:Observable<Carrito>;
  constructor(private serviciocarrito: ShoppingCartService) { }


  
  async ngOnInit() {

    this.carrito$= await this.serviciocarrito.ObtenerCarrito();
    
  }

  LimpiarCarrito(){
    this.serviciocarrito.LimpiarCarro();
  }

}
