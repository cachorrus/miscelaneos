import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SLIDES } from '../../data/slides.data';
import { HomePage } from '../home/home';
import { AjustesProvider } from '../../providers/ajustes/ajustes';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides:any[] = SLIDES;

  constructor(
    public navCtrl: NavController,
    private _ajustes: AjustesProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  saltar_tutorial() {

    this._ajustes.ajustes.mostrarIntro = false;
    this._ajustes.guardarAjustes();

    this.navCtrl.setRoot( HomePage );
  }

}
