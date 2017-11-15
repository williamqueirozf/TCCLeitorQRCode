import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner'

import { ServiceProviderInicio } from '../../providers/inicio/inicioservice';//

import { AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

options: BarcodeScannerOptions;
results:{};


  constructor(private barcode:BarcodeScanner,
              public navCtrl: NavController,
              public service : ServiceProviderInicio,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController

              ) {
//
  }

presentLoading() { //metodo utilizado pra carregar pagina
let loader = this.loadingCtrl.create({
  content: "Por Favor Aguarde...",
  duration: 3000,
  dismissOnPageChange: true //utilizado pra aparecer quando há uma demora na troca de página
});
loader.present();
  }


async scanBarcode(){

  this.options ={
    prompt:'Scanear QRCode do usuário'
  }

  this. results = await this.barcode.scan(this.options);
  //console.log(this.results);
  //this.login = this.results['text'];
  //console.log(this.login);
  //console.log(this.results);
    //console.log(this.login);


   this.service.postDataValidaQRcode(this.results) //falta realizar esse ajuste daqui pra baixo
            .subscribe(
                  data=>{
                    if(data.permissao === true){
                      //console.log(this.login);
                      //console.log("Perfeito");
                      //console.log(data.id_usuario + " Variavel Banco");
                      //alert('Obrigado ' + data.nome_pessoa + 'Volte Sempre.');
                    
                      let alert = this.alertCtrl.create({
                      title: 'Cancela Liberada',
                      subTitle: 'Obrigado ' + data.nome_pessoa,
                      buttons: ['Ok']
                      });
                      alert.present();
                    
                    //this.navCtrl.push(InicioPage); //redireciona para a tela inicial se tudo estiver certo
                    
                  }
                  else{
                      let alert = this.alertCtrl.create({
                      title: 'Cancela não Liberada',
                      subTitle: "Por Gentileza.Digija-se ao autoatendimento.",
                      buttons: ['Ok']
                      });
                      alert.present();
                    
                  }; //this.getDados();
                        
                  },
                  err=>console.log(err)
            );


  
 // console.log(this.results['text']);//trazendo variavel text do objeto results
 
  //this.id_usuario = this.results['text'];
 // console.log(this.id_usuario);
  }

  /*async encodeData(){
    const result=await this.barcode.encode(this.barcode.Encode.TEXT_TYPE,'http://learninionic2.com')
  }*/

}
