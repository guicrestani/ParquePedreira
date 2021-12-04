import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConhecaPage } from './conheca.page';

const routes: Routes = [
  {
    path: '',
    component: ConhecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConhecaPageRoutingModule {}
