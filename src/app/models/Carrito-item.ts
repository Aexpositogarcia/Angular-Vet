import { Producto } from "./producto";


export class Carritoitem{

    
    
    $key:string;
    titulo:string;
    imagenUrl: string;
    precio:number;
    cantidad:number;

    constructor(init?: Partial<Carritoitem>) {
        Object.assign(this, init);
      }

    get Preciototal(){ return this.precio * this.cantidad; }

}