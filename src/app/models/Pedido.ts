import { Carrito } from "./Carrito";

export class Pedido{
    
    FechaPedido:number;
    productos:any[]

    constructor(public userId:string ,public direccion: any, carrito:Carrito ){
    this.FechaPedido=new Date().getTime();
      console.log('Carrito llega: '+carrito.items);
    this.productos=carrito.items.map(i=>{
          //Campos deben de ser llamados igual que en la base de datos para que funcione y los reconozca (ej i.imagen)
          return {
            producto: {
              titulo:i.titulo,
              imagenUrl:i.imagenUrl,
              precio:i.precio
            },
            cantidad:i.cantidad,
            PrecioTotal:i.Preciototal
          }
        
        })
    }
}

    
