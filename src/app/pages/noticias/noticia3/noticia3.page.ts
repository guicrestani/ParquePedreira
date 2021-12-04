import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia3',
  templateUrl: './noticia3.page.html',
  styleUrls: ['./noticia3.page.scss'],
})
export class Noticia3Page implements OnInit {

  fotos: string[] = [
    '../assets/imagens/lixo1.jpeg',
    '../assets/imagens/lixo2.jpeg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
