import { Component, OnInit } from '@angular/core';
import { AnimalesService } from '../animales.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppUsuarios } from '../models/app-usuarios';

@Component({
  selector: 'app-animales-form',
  templateUrl: './animales-form.component.html',
  styleUrls: ['./animales-form.component.css']
})
export class AnimalesFormComponent  {
id;
animal:{};
usuario:AppUsuarios;
email;
constructor(

  private auth:AuthService,
  private route: ActivatedRoute,
  private animaleservice:AnimalesService, 
  private ruter: Router) { 
  //Obtener todas las categorias
  this.auth.appUser$.take(1).subscribe(appUser=>this.usuario=appUser);

  
  //Obtener el id pasado por parametro
  this.id=this.route.snapshot.paramMap.get('id');
  //take para indicar que el observable se completara cuando se le pase solo un objeto
 if(this.id) this.animaleservice.obteneranimal(this.id).take(1).subscribe(p => this.animal = p);
  
  console.log(this.animal);
}
save(animal){

  if(this.id){
    this.animaleservice.actualizar(this.id,animal);
    this.ruter.navigate(['/animales']);
  }else{
    this.animaleservice.crear(animal);
    this.ruter.navigate(['/animales']); 
  }
}

eliminar(){
  
  if(confirm("¿Quieres eliminar este producto?")){

     this.animaleservice.eliminar(this.id);
     this.ruter.navigate(['/admin/products']);

  }
}

}
