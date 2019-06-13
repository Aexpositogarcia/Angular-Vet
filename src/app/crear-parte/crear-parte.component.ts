import { Component, OnInit } from '@angular/core';
import { CitasService } from '../citas.service';
import { AnimalesService } from '../animales.service';
import { ActivatedRoute } from '@angular/router';
import { Cita } from '../models/cita';
import { Observable } from 'rxjs';
import { Animal } from '../models/animales';
import { version } from 'punycode';

@Component({
  selector: 'app-crear-parte',
  templateUrl: './crear-parte.component.html',
  styleUrls: ['./crear-parte.component.css']
})
export class CrearParteComponent implements OnInit {
  parte;
  id;
  cita$:Observable<Cita>;
  citao={};
  cita={};
  animal$:Observable<Animal>;
  animal={};
  
  constructor(private citaservicio:CitasService,
    private animalesServicio:AnimalesService,
    private route: ActivatedRoute,
  ) {
     
    this.id=this.route.snapshot.paramMap.get('id');
    //this.auth.appUser$.take(1).subscribe(appUser=>this.usuario=appUser);
    console.log(this.id);
  }
  async obtenerdatosanimal(){

    this.animal$ = await this.cita$.switchMap(u => this.animalesServicio.obteneranimal(u.animal));
    this.animal$.take(1).subscribe(x=>this.animal=x);
    console.log(this.animal$);
  }

  save(parte){
    this.citaservicio.actualizarparte(this.id,parte);
  }

  llamada(){
    console.log('CITA: '+this.cita);
  }
  llenarcita(){
  
    this.llamada();
    
    
    //this.cita=this.citao;  
    
  }

  async ngOnInit() {

    this.cita$= await this.citaservicio.obtenercita(this.id);
    this.cita$.subscribe(x=>{this.cita=x});
    this.obtenerdatosanimal();
        //this.obtenerdatosanimal(this.cita.animal);
  }

  

}
