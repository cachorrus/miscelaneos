import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';
import { AjustesProvider } from '../../providers/ajustes/ajustes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pagina2 = Pagina2Page;
  constructor(
    public navCtrl: NavController,
    private _ajustes: AjustesProvider,
    public alertCtrl: AlertController
  ) {

  }

  verIntro(){
    this._ajustes.ajustes.mostrarIntro = true;
    this._ajustes.guardarAjustes();

    this.navCtrl.setRoot('IntroPage')
  }

  verPagina2() {

    const confirm = this.alertCtrl.create({
      title: '¿Seguro?',
      message: '¿Estas seguro de que deseas entrar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicked');
            //return false;
          }
        },
        {
          text: 'Sí, seguro',
          handler: () => {
            console.log('Sí clicked');
            let navTransition = confirm.dismiss();

            navTransition.then( () => {
              this.navCtrl.push(this.pagina2);
            });

            return false;
          }
        }
      ]
    });
      confirm.present();

  }

}
