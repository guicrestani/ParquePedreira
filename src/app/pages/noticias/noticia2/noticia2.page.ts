import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia2',
  templateUrl: './noticia2.page.html',
  styleUrls: ['./noticia2.page.scss'],
})
export class Noticia2Page implements OnInit {

  fotos: string[] = [
    '../assets/imagens/predioPrincipal1.jpeg',
    '../assets/imagens/predioPrincipal2.jpeg',
    '../assets/imagens/predioPrincipal3.jpeg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
