import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  fotos: string[] = [
    '../assets/imagens/construção1.JPG',
    '../assets/imagens/construção2.jpeg',
    '../assets/imagens/construção3.jpeg',
    '../assets/imagens/construção4.jpeg',
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  irNoticia1(){
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
