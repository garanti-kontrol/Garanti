import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import{AngularFirestore} from '@angular/fire/firestore';
import {Userservice} from '../user.service';
import {firestore} from 'firebase/app';

@Component({
  selector: 'app-urnkyt',
  templateUrl: './urnkyt.page.html',
  styleUrls: ['./urnkyt.page.scss'],
})
export class UrnkytPage implements OnInit {
  urunky: String="";
  constructor(public http:Http,
    public afStore:AngularFirestore,
    public service:Userservice,
     ) { }

  imageURL:string
  urunismi:string
  serino:string
  marka:string
  stntr:string
  model:string
  grntr:string
  
  postOlustur(){
    const resim=this.imageURL
    const urunismi=this.urunismi
    const serino=this.serino
    const marka=this.marka
    const stntr=this.stntr
    const model=this.model
    const grntr=this.grntr

    this.afStore.doc(`users/${this.service.getUID()}`).update({
    posts:firestore.FieldValue.arrayUnion({
      resim,
      urunismi,
      serino,
      marka,
      model,
      stntr,
      grntr
    })
    })

  }

  ngOnInit() {
  }


  fileChanged(event){

    const files=event.target.files
    //console.log(files)
    const data=new FormData()
    data.append('file',files[0])
    data.append('UPLOADCARE_STORE','1')
    data.append('UPLOADCARE_PUB_KEY','7bac6d5534bd9fd36776')
    this.http.post('https://upload.uploadcare.com/base/',data).subscribe(event=>{
      this.imageURL=event.json().file
    })
  }
}
