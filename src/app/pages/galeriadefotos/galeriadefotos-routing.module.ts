import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriadefotosPage } from './galeriadefotos.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriadefotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriadefotosPageRoutingModule {}
