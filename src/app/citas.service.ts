import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class CitasService {

  constructor(private db: AngularFireDatabase) { }


  crear(cita){

    return this.db.list('/citas').push(cita);
  }
  actualizar(idcita,cita){

    return this.db.object('/citas/' + idcita).update(cita);

  }
  actualizarparte(idcita,parte){
    return this.db.object('/citas/' + idcita).update(parte);
  }
  obtenerfecha(fecha){
    return this.db.list('/citas', {
      query: {
        orderByChild: 'fecha',
        equalTo: fecha 
           

      }
    });
  

  }
  fechactual(){
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var dia:string =curr_date.toString();
    var mes:string =curr_month.toString();

    
    if(curr_date<10){
       dia=('0' + curr_date).slice(-2); // '04'
    }
    if(curr_month<10){
       mes=('0' + curr_month).slice(-2); // '04'
    }
    var fecha=curr_year+'-'+mes+'-'+dia;
    console.log('fecha'+fecha)
    return fecha;
  }
  eliminarcita(citaid){

    return this.db.object('/citas/' + citaid).remove();

  }
  obteneremail(email){
    return this.db.list('/citas', {
      query: {
        orderByChild: 'email',
        equalTo: email        
      }
    });
  

  }

  obtenerporanimal(animal){
    return this.db.list('/citas', {
      query: {
        orderByChild: 'animal',
        equalTo: animal        
      }
    });
  }
  obtenertodos(){

    return this.db.list('/citas');

  }
  obtenercita(idcita:string){

    return this.db.object('/citas/' + idcita);

  }
  eliminar(idcita){

    return this.db.object('/citas/' + idcita).remove();

  }

}
