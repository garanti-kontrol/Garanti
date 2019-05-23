import { Component, OnInit, ViewChild } from '@angular/core';
import {IonTabs} from '@ionic/angular/';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs') tabs:IonTabs
  
  constructor() { }

  ngOnInit() {

    this.tabs.select('urunler')

  }

}
