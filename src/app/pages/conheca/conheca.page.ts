import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conheca',
  templateUrl: './conheca.page.html',
  styleUrls: ['./conheca.page.scss'],
})
export class ConhecaPage implements OnInit {

  fotos1: string[] = [
    '../assets/imagens/predioPrincipal1.jpeg',
    '../assets/imagens/predioPrincipal2.jpeg',
    '../assets/imagens/predioPrincipal3.jpeg',
  ];

  fotos2: string[] = [
    '../assets/imagens/quadra1.jpeg',
    '../assets/imagens/quadra2.jpeg',
    '../assets/imagens/quadra3.jpeg',
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
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
