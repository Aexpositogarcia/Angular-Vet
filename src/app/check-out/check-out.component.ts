import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Carrito } from '../models/Carrito';
import { Carritoitem } from '../models/Carrito-item';
import { Subscription } from 'rxjs';
import { PedidoService } from '../pedido.service';
import { AuthService } from '../auth.service';
import { Pedido } from '../models/Pedido';
import { RouterLink, Router } from '@angular/router';
import { ServicioEmailService } from '../servicio-email.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy{

  constructor(
    private emailservice:ServicioEmailService,
    private route: Router,
    private authservice: AuthService,
    private pedidoservicio: PedidoService,
    private shoppingcartservice:ShoppingCartService

    ){}


  carrito:Carrito;
  pedido = {}; 
  subcripcion: Subscription;
  subcribtionuser: Subscription;
  userId:string;
  imagen:string;



  async ngOnInit(){

    let carrito$= await this.shoppingcartservice.ObtenerCarrito();
    this.subcripcion=carrito$.subscribe(carrito=>this.carrito=carrito); 
    this.subcribtionuser=this.authservice.user$.subscribe(user=>this.userId=user.uid);

  }

  ngOnDestroy(){

    this.subcripcion.unsubscribe();
    this.subcribtionuser.unsubscribe();

  } 
  async pedirPedido() {

   console.log(this.pedido);
    console.log(this.carrito);
    let pedidos=new Pedido(this.userId, this.pedido, this.carrito)

    let resultado=await this.pedidoservicio.guardarPedido(pedidos);
    this.emailservice.sendEmail();
    this.shoppingcartservice.LimpiarCarro();
    this.route.navigate(['/pedido-exitoso',resultado.key])
    
  }    
}
