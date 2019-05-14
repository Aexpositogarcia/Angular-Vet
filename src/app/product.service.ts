import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }


  crear(producto){
    return this.db.list('/productos').push(producto);
  }
  actualizar(productId,producto){

    return this.db.object('/productos/' + productId).update(producto);

  }

  obtenertodos(){

    return this.db.list('/productos');

  }
  obtenerproducto(productId){

    return this.db.object('/productos/' + productId);

  }
  eliminar(productId){

    return this.db.object('/productos/' + productId).remove();

  }
}
