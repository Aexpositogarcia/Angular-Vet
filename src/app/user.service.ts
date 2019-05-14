import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUsuarios } from './models/app-usuarios';


@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  guardar(user: firebase.User){
    this.db.object('/users/'+user.uid).update({
      name: user.displayName,
      email: user.email
      //podriamos crear un campo admin
    });
  }
  
  obtenerUsuario(uid: string):FirebaseObjectObservable<AppUsuarios>{
    //Devuelve el  el usuario como tipoFirebaseObservable<"Objeto Usuario">
    return this.db.object('/users/'+uid);
  }

}
