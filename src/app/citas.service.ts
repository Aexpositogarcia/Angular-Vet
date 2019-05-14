import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CitasService {

  constructor(private db: AngularFireDatabase) { }


  crear(cita){
    return this.db.list('/citas').push(cita);
  }
  actualizar(idcita,cita){

    return this.db.object('/citas/' + idcita).update(cita);

  }

  obtenertodos(){

    return this.db.list('/citas');

  }
  obtenerproducto(idcita){

    return this.db.object('/citas/' + idcita);

  }
  eliminar(idcita){

    return this.db.object('/citas/' + idcita).remove();

  }

}
