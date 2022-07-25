import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public refreshNewUser$ = this.loginService.refreshUser$;
  myUser: any= {
    email: "null",
    name: "null",
    pass: "null",
    rol: "admin",
    avatar: 'assets/avatar.png'
  };
  
  constructor(
    public alertController: AlertController,
    public router: Router,
    private menu: MenuController,
    private loginService: LoginService
    ) {
      this.refreshNewUser$.subscribe((e) => {
        if(e){
          this.myUser = this.loginService.userLogged 
        }
      });
    }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      //header: '¿Esta seguro de cerrar sesion?',
      message: '¿Esta seguro de cerrar sesion?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Sí',
          handler: () => {
            this.router.navigate(['login'])
            this.menu.close()
          },
        },
      ],
    });

    await alert.present();
  }

  goToUsers(){
    this.router.navigate(['users']);
    this.menu.close()
  }

  goToHome(){
    this.router.navigate(['home']);
    this.menu.close()
  }
}
