import { Producto } from "./producto";


export class Carritoitem{
    
    constructor(public producto: Producto, public cantidad:number){}

    get Preciototal(){ return this.producto.precio * this.cantidad;  }

    
}