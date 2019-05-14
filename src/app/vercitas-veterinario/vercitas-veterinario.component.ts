import { Component, OnInit } from '@angular/core';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-vercitas-veterinario',
  templateUrl: './vercitas-veterinario.component.html',
  styleUrls: ['./vercitas-veterinario.component.css']
})
export class VercitasVeterinarioComponent implements OnInit {
  todos$;
  constructor(private citasservicios: CitasService) { 
   this.citasservicios.obtenertodos().subscribe(x=>this.todos$=x);
  }
  
  ngOnInit() {
  }

}
