import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Animal } from './models/animales';
import { AuthService } from './auth.service';
import { AppUsuarios } from './models/app-usuarios';
import { UploadFileService } from './upload-file.service';
import { FileUpload } from './models/FileUpload';



@Injectable()
export class AnimalesService {

  usuario:AppUsuarios;
  
  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}
  
  
  constructor(

    private db:AngularFireDatabase,
    private auth: AuthService,
    private uploadService: UploadFileService) {
    
   }
   
   timeout() {
    var that = this;
    setTimeout(function () {
        console.log('Test');
        that.timeout();
    }, 10/60);
} 

  
  crear(animal){
    return this.db.list('/animales').push(animal,);
  }
  actualizar(animalid,animal){
    
    return this.db.object('/animales/' + animalid).update(animal);

  }

  obtenertodos(){

    return this.db.list('/animales');

  }
 obteneranimalesacutal(email: string){

  console.log(email);
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
