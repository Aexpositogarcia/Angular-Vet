
import{Carritoitem } from './Carrito-item';
import { Producto } from './producto';

export class Carrito{

    items: Carritoitem[]=[];

    constructor(private itemsMap: { [productId: string]: Carritoitem }) {
        //o vacio para que se incialice 
        this.itemsMap = itemsMap || {};
        
        for (let productId in itemsMap) {
        
          let item = itemsMap[productId];

          //... operador para inicializar el array
          //se le añade al array item todo su contenido + la key

          this.items.push(new Carritoitem({ ...item, $key: productId }));
          
        }
      }
            
    obtenercantidad(product: Producto){

        let item=this.itemsMap[product.$key];
    
        return item ? item.cantidad:0;
        
    }

    get Preciototalglobal(){

        let sum=0;
        for (let productId in this.items)
        sum += this.items[productId].Preciototal;
        return sum;

    }

   
    get totaldeProductos(){

        let contador=0;
        for (let productoid in this.items)
            contador += this.items[productoid].cantidad;
        return contador;

    }       
}