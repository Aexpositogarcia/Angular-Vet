import{Carritoitem } from './Carrito-item';

export class Carrito{

    items: Carritoitem[]=[];

    constructor(public itemsmap: {proudctId: Carritoitem[]}){
    
        for(let productId in itemsmap){
            
            let item=itemsmap[productId];
            this.items.push(new Carritoitem(item.producto, item.cantidad));

        }
            
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