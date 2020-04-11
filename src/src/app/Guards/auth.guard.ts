import { Observable } from 'rxjs';
import { UserAPI } from './../Services/UserAPI.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: UserAPI,
    private myRoute: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggednIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }

}