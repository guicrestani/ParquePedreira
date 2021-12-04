import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriadefotosPageRoutingModule } from './galeriadefotos-routing.module';

import { GaleriadefotosPage } from './galeriadefotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriadefotosPageRoutingModule
  ],
  declarations: [GaleriadefotosPage]
})
export class GaleriadefotosPageModule {}
