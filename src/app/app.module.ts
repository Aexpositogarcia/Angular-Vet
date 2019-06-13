import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import {CategoryService}from './category.service';

import { AuthGuardService } from './auth-guard.service';
import {VeterinarioAuthGuardService} from './veterinario-auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ProductService} from'./product.service';
import {AnimalesService} from './animales.service';
import {CustomFormsModule} from 'ng2-validation';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { AnimalesFormComponent } from './animales-form/animales-form.component';
import { AnimalesComponent } from './animales/animales.component';
import { VercitasVeterinarioComponent } from './vercitas-veterinario/vercitas-veterinario.component';
import {DatePipe} from '@angular/common';
import { PedircitaComponent } from './pedircita/pedircita.component';
import {CitasService} from './citas.service';
import { PedidoService } from './pedido.service';
import { ResumenCarritoComponent } from './resumen-carrito/resumen-carrito.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { CrearParteComponent } from './crear-parte/crear-parte.component';
import {UploadFileService} from './upload-file.service';
import { ComponenteEmailComponent } from './componente-email/componente-email.component';
import { ServicioEmailService } from './servicio-email.service';
import { HttpModule,Http } from '@angular/http';
import { VerTodasCitasComponent } from './ver-todas-citas/ver-todas-citas.component';
import { VerMisCitasComponent } from './ver-mis-citas/ver-mis-citas.component';




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    
    ProductFormComponent,
    ProductCardComponent,
    AnimalesFormComponent,
    AnimalesComponent,
    VercitasVeterinarioComponent,
    PedircitaComponent,
    CrearParteComponent,
    ResumenCarritoComponent,
    DetallePedidoComponent,
    ComponenteEmailComponent,
    VerTodasCitasComponent,
    VerMisCitasComponent,   
   
  ],
  imports: [

    BrowserModule,
    FormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    CustomFormsModule,
    RouterModule.forRoot([
      
      {path:'' ,component:ProductsComponent},
      {path:'vercitasveterinario' ,component:VercitasVeterinarioComponent,canActivate:[AuthGuardService]},
      {path:'vermiscitas',component:VerMisCitasComponent},
      {path:'products' ,component:ProductsComponent},
      {path:'pedircita' ,component:PedircitaComponent},
      {path:'shopping-cart' ,component:ShoppingCartComponent},
      {path:'check-out' ,component:CheckOutComponent, canActivate:[AuthGuardService]},
      {path:'pedido-exitoso/:id' ,component:OrderSuccessComponent, canActivate:[AuthGuardService]},
      {path:'crear-parte/:id' ,component:CrearParteComponent},
      {path:'detalle-pedido/:id' ,component:DetallePedidoComponent},
      {path:'animales-form/:id' ,component:AnimalesFormComponent},
      {path:'login' ,component:LoginComponent},
      {path:'animales-form/new' ,component:AnimalesFormComponent},
      {path:'animales-form/:id' ,component:AnimalesFormComponent},
      {path:'animales', component:AnimalesComponent},
      {path:'my/orders',component:MyOrdersComponent , canActivate:[AuthGuardService]},
      {path:'admin/products' ,component:AdminProductsComponent,  canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products' ,component:AdminProductsComponent,  canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/orders' ,component:AdminOrdersComponent,  canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products/new',component:ProductFormComponent, canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products/:id',component:ProductFormComponent, canActivate:[AuthGuardService,AdminAuthGuardService]}

    ])
    
  ],

  providers: [
    DatePipe,
    AuthService,
    AuthGuardService,
    UserService,
    ServicioEmailService,
    VeterinarioAuthGuardService,
    AdminAuthGuardService,
    CategoryService,
    ShoppingCartService,
    CitasService,
    AnimalesService,
    UploadFileService,
    ProductService,
    PedidoService
  ],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
