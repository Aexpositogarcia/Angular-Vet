import { Animal } from "./animales";

export interface Cita{
    
    $key: string;
    Animales:Animal[];
    nombre:string;
    categoria: string;
    descripcion: string;
    fecha:string;
    parte:string;
    
}