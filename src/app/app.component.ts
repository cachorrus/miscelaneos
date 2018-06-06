import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AjustesProvider } from '../providers/ajustes/ajustes';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any; // = 'IntroPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private _ajustes: AjustesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this._ajustes.cargarAjustes().then( () => {

        if ( _ajustes.ajustes.mostrarIntro ) {
          console.log( 'intro', _ajustes.ajustes.mostrarIntro );
          this.rootPage = 'IntroPage';          
        } else {
          console.log( 'home' );
          this.rootPage = HomePage;
        }  
        
        
        platform.pause.subscribe( ()=> {
          console.log('La aplicacion se va a detener');
        });

        platform.resume.subscribe( () => {
          console.log('La aplicacion se va a reanudar');
        })


        statusBar.styleDefault();
        splashScreen.hide();

      }).catch ( (error) => {

        console.error( 'ajustes error: ', JSON.stringify(error) );
        this.rootPage = 'IntroPage';

      });

    });
  }
}

