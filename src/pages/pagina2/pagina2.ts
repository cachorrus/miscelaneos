import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  irPagina3() {
    this.navCtrl.push( 'mi-pagina3' );
  }


  ionViewDidLoad(){
    console.log('ionViewDidLoad');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }
  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }
  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }
  ionViewCanEnter(){
    console.log('ionViewCanEnter');

    // let numero = Math.round( Math.random() * 10 );
    // console.log( numero );

    // if ( numero >=4 ) {
    //   return true;
    // } else {
    //   return false;
    // }
    let promesa = new Promise( (resolve, reject) => {

      const confirm = this.alertCtrl.create({
        title: '¿Seguro?',
        message: '¿Estas seguro de que deseas entrar?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar clicked');
              resolve(false);
            }
          },
          {
            text: 'Sí, seguro',
            handler: () => {
              console.log('Sí clicked');
              // let navTransition = confirm.dismiss();

              // navTransition.then( () => {
              //   this.navCtrl.push(this.pagina2);
              // });

              resolve(true);
            }
          }
        ]
      });
        confirm.present();

    });

    return promesa;

  }

  ionViewCanLeave(){
    console.log('ionViewCanLeave');
    console.log('Espere dos segundos para salir');

    let promesa = new Promise( (resolve, reject) => {

      const loader = this.loadingCtrl.create({
        content: "Please wait...",      
      });

      loader.present();


      setTimeout( ()=> {
        loader.dismiss();
        resolve(true);

      },2000);

    });


    

    return promesa;

  }

}
