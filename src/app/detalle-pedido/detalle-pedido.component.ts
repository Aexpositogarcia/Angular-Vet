import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../models/Pedido';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  id;
  pedido$:Observable<Object>;
  pedido;

  constructor(
    private ruter: Router,
    private route: ActivatedRoute,
    private pedidoservicio:PedidoService,
    ) { 

     
      
            
 
    }

 

  async ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.pedido$= this.pedidoservicio.obtenerPedidoId(this.id); 
    await this.pedido$.take(1).subscribe(x=>this.pedido=x);
   
  }

}
