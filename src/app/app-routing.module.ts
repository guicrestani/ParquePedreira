import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  {
    path: 'galeriadefotos',
    loadChildren: () => import('./pages/galeriadefotos/galeriadefotos.module').then(m => m.GaleriadefotosPageModule)
  },
  {
    path: 'conheca',
    loadChildren: () => import('./pages/conheca/conheca.module').then(m => m.ConhecaPageModule)
  },
  {
    path: 'noticia1',
    loadChildren: () => import('./pages/noticias/noticia1/noticia1.module').then(m => m.Noticia1PageModule)
  },
  {
    path: 'noticia2',
    loadChildren: () => import('./pages/noticias/noticia2/noticia2.module').then(m => m.Noticia2PageModule)
  },
  {
    path: 'noticia3',
    loadChildren: () => import('./pages/noticias/noticia3/noticia3.module').then(m => m.Noticia3PageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
