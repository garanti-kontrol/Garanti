import { Component, OnInit } from '@angular/core';
import{AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Userservice } from '../user.service';
import {Router} from '@angular/router'
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.page.html',
  styleUrls: ['./urunler.page.scss'],
})
export class UrunlerPage implements OnInit {

profilKullanici:AngularFirestoreDocument
kullanici
posts
Sub
profilfoto
userposts
constructor(public service:Userservice,public afStore:AngularFirestore,public router:Router,public afAuth:AngularFireAuth) {
  const posts=this.afStore.doc(`users/${this.service.getUID()}`)
this.userposts=posts.valueChanges()

this.profilKullanici=this.afStore.doc(`users/${this.service.getUID()}`)
this.Sub=this.profilKullanici.valueChanges().subscribe(event=>{

this.posts=event.posts
this.kullanici=event.username
this.profilfoto=event.profilfoto 
})
}
/* ngOnDestroy(){
  this.Sub.unsubscribe()
} */

  ngOnInit() 
  {
  }
  edit(){
    this.router.navigate(['/edit-page'])
  }
  cks(){
    this.router.navigate(['/login'])
  }
}
