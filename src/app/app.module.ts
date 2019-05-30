import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import  firebaseConfig  from './firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { Userservice } from './user.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {HttpModule} from '@angular/http';

import {AngularFireFunctionsModule,FunctionsRegionToken} from '@Angular/fire/functions'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    AngularFirestoreModule,
    HttpModule,
    AngularFireFunctionsModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Userservice,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
      {provide:FunctionsRegionToken,useValue:'us-central1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
