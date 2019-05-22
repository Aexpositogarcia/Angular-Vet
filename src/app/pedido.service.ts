import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PedidoService {

  constructor(private db: AngularFireDatabase) { }

  guardarPedido(pedido){
    console.log();
    return this.db.list('/pedidos').push(pedido);
  }

  obtenerpedidos() { 
    return this.db.list('/pedidos');
  }

  obtenerPedidosUsuario(userId: string) {
    return this.db.list('/pedidos', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    });
  }

}
