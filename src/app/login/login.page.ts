import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    pass: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]))
  });
  constructor(
    private loginService: LoginService,
    private router: Router,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm.value)
    if(this.loginService.isValidEmail(this.loginForm.value.email)){
      this.loginService.userLogged = this.loginService.getUserByEmail(this.loginForm.value.email);
      this.router.navigate(['home'])
      this.loginService.newUserEmmit(true);
    }else{
      this.presentToast()
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Credenciales invalidas',
      duration: 2000,
    });
    toast.present();
  }


}
