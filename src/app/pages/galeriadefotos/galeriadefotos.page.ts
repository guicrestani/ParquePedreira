import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galeriadefotos',
  templateUrl: './galeriadefotos.page.html',
  styleUrls: ['./galeriadefotos.page.scss'],
})
export class GaleriadefotosPage implements OnInit {

  fotosJunho: string[] = [
    '../assets/imagens/construção1.JPG',
    '../assets/imagens/construção2.jpeg',
    '../assets/imagens/construção3.jpeg',
    '../assets/imagens/construção4.jpeg',
  ];

  fotosAbril: string[] = [
    '../assets/imagens/predioPrincipal1.jpeg',
    '../assets/imagens/predioPrincipal2.jpeg',
    '../assets/imagens/predioPrincipal3.jpeg',
    '../assets/imagens/quadra1.jpeg',
    '../assets/imagens/quadra2.jpeg',
    '../assets/imagens/quadra3.jpeg',
  ];

  fotos: string[] = [
    '../assets/imagens/lago1.jpeg',
    '../assets/imagens/lago2.jpeg',
    '../assets/imagens/pracinha1.jpeg',
    '../assets/imagens/pracinha2.jpeg',
    '../assets/imagens/pracinha3.jpeg',
  ];

  constructor(private navCtrl:NavController) { }

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
