import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,
    private service:ServerService){

  }
  canActivate(): boolean {
    if(this.service.loggedIn()){
      return true;
    }else{
      this.router.navigateByUrl("/register")
      return false;
    }
  }
    
  
  
}
