import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AjustesProvider {

  ajustes = {
    mostrarIntro: true
  }

  constructor(private storage: Storage) {
    console.log('Hello AjustesProvider Provider');
  }

  cargarAjustes(): Promise<any> {    

    return new Promise( (resolve, reject) => {

      this.storage.get('ajustes').then((val) => {

        // regresa null si el storage(ajustes) no existe
        if ( val ) {
          this.ajustes = val;
        }
                
        console.log('cargarAjustes: ', JSON.stringify(val));
        resolve();
  
      }, (err) => {

        console.log('Error cargarAjustes: ', JSON.stringify(err));
        reject( err );
        
      });

    });

  }

  guardarAjustes() {

    this.storage.set('ajustes', this.ajustes);

  }

}
