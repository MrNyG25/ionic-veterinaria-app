import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private  newUserSubject = new BehaviorSubject<boolean>(false);
  refreshUser$ = this.newUserSubject.asObservable();

  usuarios: any[] =[  
      {
        email: "admin@gmail.com",
        name: "Neider García",
        pass: "cont123*",
        rol: "admin",
        avatar: 'assets/avatar.png'
      },
      {
        email: "admin2@gmail.com",
        name: "Yesid García",
        pass: "cont123*",
        rol: "admin",
        avatar: 'assets/appimgF.png'
      }
  ];
  constructor() { }

  isValidEmail(email: string): boolean{
    let res =  this.usuarios.filter(e => e.email === email);
    return res.length > 0;
  }

  getUserByEmail(email: string){
    let res =  this.usuarios.filter(e => e.email === email)[0];
    return res;
  }

  newUserEmmit(value: boolean){
    this.newUserSubject.next(value);
  }

  _userLogged = null;

  public set userLogged(v : any) {
    this._userLogged = v;
  }

  
  public get userLogged() : any {
    return this._userLogged;
  }
  
  
}
