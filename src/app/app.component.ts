import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public alertController: AlertController,
    public router: Router,
    private menu: MenuController) {}

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
}
