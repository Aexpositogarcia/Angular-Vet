import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router'
import { AuthService } from './auth.service';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
//Devuelve true o false para dejar entrar
export class AuthGuardService implements CanActivate{
  

  constructor(private auth:AuthService, private router:Router) { 

  }
  //
  canActivate(route, state: RouterStateSnapshot){
    
    return this.auth.user$.map(user=>{
      if(user) return true;

      this.router.navigate(['/login'],{queryParams:{returnUrl: state.url}});
      return false;

    });
  }

}
