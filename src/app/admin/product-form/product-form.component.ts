import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router, RouterPreloader, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categoria$;
  producto={};
  id;

  constructor(
    private categoryservice: CategoryService,
    private route: ActivatedRoute,
    private productservice:ProductService, 
    private ruter: Router) { 
    //Obtener todas las categorias
    this.categoria$=categoryservice.getCategorias();
    //Obtener el id pasado por parametro
    this.id=this.route.snapshot.paramMap.get('id');
    //take para indicar que el observable se completara cuando se le pase solo un objeto
   if(this.id) this.productservice.obtenerproducto(this.id).take(1).subscribe(p => this.producto = p);
    
    console.log(this.producto);
  }
  
  save(producto){

    if(this.id){
      this.productservice.actualizar(this.id,producto);
      this.ruter.navigate(['/admin/products']);
    }else{
      this.productservice.crear(producto);
      this.ruter.navigate(['/admin/products']); 
    }

  }

  eliminar(){
    
    if(confirm("¿Quieres eliminar este producto?")){
       this.productservice.eliminar(this.id);
       this.ruter.navigate(['/admin/products']);
    }
  }
  
}
