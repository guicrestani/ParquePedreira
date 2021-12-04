import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasPage } from './noticias.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasPage
  },
  {
    path: 'noticia1',
    loadChildren: () => import('./noticia1/noticia1.module').then( m => m.Noticia1PageModule)
  },
  {
    path: 'noticia2',
    loadChildren: () => import('./noticia2/noticia2.module').then( m => m.Noticia2PageModule)
  },
  {
    path: 'noticia3',
    loadChildren: () => import('./noticia3/noticia3.module').then( m => m.Noticia3PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasPageRoutingModule {}
