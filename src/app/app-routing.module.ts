import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',//ana sayfa ayarı
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'ayarlar', loadChildren: './ayarlar/ayarlar.module#AyarlarPageModule' },
  { path: 'hakkimizda', loadChildren: './hakkimizda/hakkimizda.module#HakkimizdaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'urnkyt', loadChildren: './urnkyt/urnkyt.module#UrnkytPageModule' },
  { path: 'kayit', loadChildren: './kayit/kayit.module#KayitPageModule' },
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  { path: 'uploader', loadChildren: './uploader/uploader.module#UploaderPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'kayit', loadChildren: './kayit/kayit.module#KayitPageModule' },
  { path: 'profil', loadChildren: './profil/profil.module#ProfilPageModule' },
  { path: 'edit-page', loadChildren: './edit-page/edit-page.module#EditPagePageModule' }
  //{ path: 'edit-page', loadChildren: '../edit-page/edit-page.module#EditPagePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
