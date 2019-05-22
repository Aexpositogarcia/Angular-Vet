import { Component, OnInit, Input } from '@angular/core';
import { Carrito } from '../models/Carrito';

@Component({
  selector: 'resumen-carrito',
  templateUrl: './resumen-carrito.component.html',
  styleUrls: ['./resumen-carrito.component.css']
})
export class ResumenCarritoComponent {

  @Input('cart')cart: Carrito;

  

}
