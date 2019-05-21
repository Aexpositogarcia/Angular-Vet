import { Producto } from "./producto";


export class Carritoitem{
    
    $key:string;
    titulo:string;
    imgUrl:string;
    precio:number;
    cantidad:number;

    get Preciototal(){ return this.precio * this.cantidad; }

}