import { Component, OnInit } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore';
import { Userservice } from '../user.service';

@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.page.html',
  styleUrls: ['./urunler.page.scss'],
})
export class UrunlerPage implements OnInit {

userposts
constructor(public service:Userservice,public afStore:AngularFirestore) {
  const posts=this.afStore.doc(`users/${this.service.getUID()}`)
this.userposts=posts.valueChanges()
}
  
  ngOnInit() 
  {
  }

}
