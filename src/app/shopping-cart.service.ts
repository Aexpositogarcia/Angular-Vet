import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Producto } from './models/producto';
import 'rxjs/add/operator/take'
import { Carrito } from './models/Carrito';
import { Observable } from 'rxjs';
@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { 

  }

  private CrearCarrito(){

    return this.db.list('/carrito').push({
      fecha: new Date().getTime()

    });
  
  }
  //Lo convierte a un Observable Carrito
   async ObtenerCarrito():Promise<Observable<Carrito>>{

    let cartId=await this.ObtenerOcrearCarrito();
    return this.db.object('/carrito/'+cartId).map(x=>new Carrito(x.items));
    
  }
  
  ObtenerItem(cartId:string,productoid:String){
    
    return this.db.object('/carrito/'+cartId+'/items/'+productoid);
  }

  private async ObtenerOcrearCarrito(): Promise<string>{

    let cartId=localStorage.getItem('cartId');
    //Si existe el carrito devuelve  el id del carrito
    if(cartId) return cartId;
    //creamos variable resut para crear un nuevo carrito con el metodo "creaCarrito"
    let result =await this.CrearCarrito();
    //generamos un nuevo "carrito"
    localStorage.setItem('cartId',result.key);

    return result.key;
    
  }
  async AñadirCompra(producto: Producto){
    this.actualizar(producto,1);
  }

  async EliminarCompra(producto: Producto){

    this.actualizar(producto,-1);

  }
  async LimpiarCarro(){
    let cartId= await this.ObtenerOcrearCarrito();

    this.db.object('/carrito/'+cartId+'/items').remove();
  }
  
  async actualizar(producto: Producto, operador){


    let cartId= await this.ObtenerOcrearCarrito();
   
    let objetocarrito$=this.ObtenerItem(cartId,producto.$key);

      objetocarrito$.take(1).subscribe(objetocarrito=>{
      //se subcribe al carrito y añade/suma/elimina uno objeto al carrito

      let cantidad=(objetocarrito.cantidad ||0)+operador;
      if(cantidad===0) objetocarrito$.remove();
      else objetocarrito$.update({

          titulo: producto.nombre, 
          imagenUrl:producto.imagen,
          precio:producto.precio,
          cantidad: cantidad
  
        });
  
      });
    }
} 
      
    

  

