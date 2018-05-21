import { Injectable } from '@angular/core';
import {CanLoad, Route, Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreLoadGuard implements CanLoad {

  constructor( private router: Router) { }

  canLoad(route: Route): boolean | Observable<boolean> {
    const  userName = localStorage.getItem('user');
    if (userName === 'datta@gmail.com') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
