import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  pedidos$;
  
  constructor(
    private authService: AuthService,
    private serivciopedidos: PedidoService) { 

    this.pedidos$ = authService.user$.switchMap(u => serivciopedidos.obtenerPedidosUsuario(u.uid));
  }
}
