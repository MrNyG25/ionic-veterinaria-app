import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarios: any[] =[  
      {
        email: "admin@gmail.com",
        pass: "cont123*"
      }
  ];
  constructor() { }

  isValidEmail(email: string): boolean{
    let res =  this.usuarios.filter(e => e.email === email);
    return res.length > 0;
  }
}
