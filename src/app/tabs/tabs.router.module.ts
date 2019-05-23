import {RouterModule,Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import { NgModule } from '@angular/core';

const Routes:Routes=[
    {
        path: '',
        component: TabsPage,
        children:[
          { path: 'urunler', loadChildren: '../urunler/urunler.module#UrunlerPageModule' },
          { path: 'urnkyt', loadChildren: '../urnkyt/urnkyt.module#UrnkytPageModule' },
          { path: 'profil', loadChildren: '../profil/profil.module#ProfilPageModule' }
    ]  } 
    ]

      @NgModule({
        imports: [RouterModule.forChild(Routes)],
       exports:[RouterModule]
        
       
      })
    
      export class TabsRoutingModule{}