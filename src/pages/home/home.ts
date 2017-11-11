import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options: BarcodeScannerOptions;
results:{};
  constructor(private barcode:BarcodeScanner,public navCtrl: NavController) {
//
  }

async scanBarcode(){

  this.options ={
    prompt:'Scanear QRCode do usuário'
  }

  this. results = await this.barcode.scan(this.options);
  //console.log(this.results);
  
  console.log(this.results['text']);//trazendo variavel text do objeto results
  }

  /*async encodeData(){
    const result=await this.barcode.encode(this.barcode.Encode.TEXT_TYPE,'http://learninionic2.com')
  }*/

}
