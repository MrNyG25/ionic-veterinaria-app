import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  myUsers: any[] = []
  constructor(private loginService: LoginService) { 
    this.myUsers = this.loginService.usuarios;
  }

  ngOnInit() {
  }

}
