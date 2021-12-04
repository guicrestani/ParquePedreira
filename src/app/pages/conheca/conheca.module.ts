import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConhecaPageRoutingModule } from './conheca-routing.module';

import { ConhecaPage } from './conheca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConhecaPageRoutingModule
  ],
  declarations: [ConhecaPage]
})
export class ConhecaPageModule {}
