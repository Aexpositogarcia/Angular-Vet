import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Animal } from './models/animales';
import { AuthService } from './auth.service';
import { AppUsuarios } from './models/app-usuarios';

@Injectable()
export class AnimalesService {

  usuario:AppUsuarios;
  
  
  constructor(private db:AngularFireDatabase,private auth: AuthService) {
    
   }

  
  crear(animal){
    return this.db.list('/animales').push(animal);
  }
  actualizar(animalid,animal){
    
    return this.db.object('/animales/' + animalid).update(animal);

  }

  obtenertodos(){

    return this.db.list('/animales');

  }
 obteneranimalesacutal(email){
    return this.db.list('/animales',{
      query:{
        orderByChild:'email',
        equalTo:email
      }
    });
    
  }
  obteneranimal(animalid){

    return this.db.object('/animales/' + animalid);

  }
  eliminar(animalid){

    return this.db.object('/animales/' + animalid).remove();

  }
}
