import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app'
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router'
import {AngularFirestore} from '@angular/fire/firestore';
import {Userservice} from '../user.service';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.page.html',
  styleUrls: ['./kayit.page.scss'],
})
export class KayitPage implements OnInit {
  kullanici:string=""
  sifre:string=""
  tsifre:string=""
  //public Database:AngularFirestore
  constructor(
    public afAuth:AngularFireAuth,
    public Alert:AlertController,
    public router:Router,
    public Database:AngularFirestore,
    public service:Userservice) { }
  ngOnInit() {
  }
  async alertgoster(header:string,message:string){
    const alert=await this.Alert.create({
    header,
    message,
    buttons:["Kapat"]
    
    })
    await alert.present()
    }
  async singup(){

    const {kullanici,sifre,tsifre}=this
    if(sifre!==tsifre){
    return this.alertgoster("Hata","Parola alanları aynı olmalıdır.")
  
  }else{
try{
        const sonuc=await this.afAuth.auth.createUserWithEmailAndPassword(kullanici,sifre)
        //console.log(sonuc);
        if(sonuc.user){
          this.Database.doc(`users/${sonuc.user.uid}`).set({
            username:kullanici
          })
          this.service.setUser({
            kullanici:kullanici,
            id:sonuc.user.uid
          })
      }
        this.alertgoster("Başarılı","Hoşgeldiniz")
        this.router.navigate(['/tabs'])
      }catch(err){
        this.alertgoster("Hata",err.message)
      }
    }
  }}