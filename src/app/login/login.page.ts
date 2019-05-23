import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth, User} from 'firebase/app'
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router'
import { Userservice } from '../user.service';
import { KayitPage } from '../kayit/kayit.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
kullanici:string=""
sifre:string=""

  constructor(public afAuth:AngularFireAuth,public Alert:AlertController,public router:Router,public service:Userservice) { }

  ngOnInit() {
  }
  kayit(){
    this.router.navigate(['/kayit'])
  }
async login(){

const {kullanici,sifre}=this
try{
const sonuc=await this.afAuth.auth.signInWithEmailAndPassword(kullanici,sifre)
console.log(sonuc)
if(sonuc.user)
{
this.service.setUser({
  kullanici:kullanici,
id:sonuc.user.uid
})
}
this.alertgoster("Başarılı","Hoşgeldiniz")
  this.router.navigate(['/tabs'])
}
catch(err)
{console.dir(err)
if(err.code="auth/user-not-found"){
  return this.alertgoster("Hata","Kullanıcı Bulunamadı.")
  
  }
}



}
async alertgoster(header:string,message:string){
  const alert=await this.Alert.create({
  header,
  message,
  buttons:["Kapat"]
  
  })
  await alert.present()
  }
}
