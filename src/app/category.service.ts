import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategorias(){
    return this.db.list('/categorias',{
      query:{
        orderByChild: 'name'
        //equalTo:'Juguetes'
      }
      
    });
    
  }

}
