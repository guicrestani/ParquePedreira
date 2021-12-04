import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irNoticia1() {
    this.navCtrl.navigateForward('noticia1');
  }

  irNoticia2() {
    this.navCtrl.navigateForward('noticia2');
  }

  irNoticia3() {
    this.navCtrl.navigateForward('noticia3');
  }

  irParaHome() {
    this.navCtrl.navigateForward('home');
  }

  irParaNoticias() {
    this.navCtrl.navigateForward('noticias');
  }

  irParaConheca() {
    this.navCtrl.navigateForward('conheca');
  }

  irParaGaleriaFotos() {
    this.navCtrl.navigateForward('galeriadefotos');
  }

}
