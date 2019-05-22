
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../pedido.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  pedidos$;

  constructor(private serviciopedidos: PedidoService) { 
    this.pedidos$ = this.serviciopedidos.obtenerpedidos();
  }
}
