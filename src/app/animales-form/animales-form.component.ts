import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../animales.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppUsuarios } from '../models/app-usuarios';
import * as firebase from 'firebase';
import { Animal} from '../models/animales';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {FileUpload } from '../models/FileUpload';
import { UploadFileService } from '../upload-file.service';


@Component({
  selector: 'app-animales-form',
  templateUrl: './animales-form.component.html',
  styleUrls: ['./animales-form.component.css']
})
export class AnimalesFormComponent implements OnInit {
  
  async ngOnInit(){
    await this.auth.appUser$.take(1).subscribe(appUser=>this.usuario=appUser);

    console.log('###');
    console.log(this.usuario.name);
  }

animal={};

selectedFiles: FileList
currentFileUpload: FileUpload
progress: {percentage: number} = {percentage: 0}

id;
animalfinal;
model
usuario:AppUsuarios;
email;

today;
todays:string ;
dd;
mm;
yyyy;

constructor(
  private parserFormatter: NgbDateParserFormatter,
  private auth:AuthService,
  private route: ActivatedRoute,
  private animaleservice:AnimalesService, 
  private ruter: Router,
  private uploadService: UploadFileService
  ) { 
  //Obtener todas las categorias
  

  //Obtener el id pasado por parametro
  this.id=this.route.snapshot.paramMap.get('id');
  //take para indicar que el observable se completara cuando se le pase solo un objeto
  if(this.id) this.animaleservice.obteneranimal(this.id).take(1).subscribe(p => this.animal = p);
  if(this.id) console.log('entra');
    
}


save(animal){

  if(this.id){

    Object.assign(this.currentFileUpload,animal,this.usuario);

    this.animaleservice.actualizar(this.id,animal);

    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress,this.id)

  }else{ 
  
    Object.assign(this.currentFileUpload,animal,this.usuario);

    console.log(this.animalfinal);
    console.log('Entra alta');

    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress,this.id);
  }
}

selectFile(event) {

  this.selectedFiles = event.target.files;
  const file = this.selectedFiles.item(0);
  this.currentFileUpload = new FileUpload(file);

}


eliminar(){
  
  if(confirm("¿Quieres eliminar este producto?")){

     this.animaleservice.eliminar(this.id);
     this.ruter.navigate(['/animales']);

  }
}

}
