import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{BarcodeScanner} from '@ionic-native/barcode-scanner';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';//
import { ServiceProviderInicio } from '../providers/inicio/inicioservice';// tela inicial
import { Conexaobd } from '../providers/conexao/conexao';// centralizacao url banco de dados


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,//   
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Conexaobd,//    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: ServiceProviderInicio, useClass: ServiceProviderInicio},//
    BarcodeScanner
  ]
})
export class AppModule {}
