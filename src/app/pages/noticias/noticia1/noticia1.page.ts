import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia1',
  templateUrl: './noticia1.page.html',
  styleUrls: ['./noticia1.page.scss'],
})
export class Noticia1Page implements OnInit {

  fotos: string[] = [
    '../assets/imagens/construção1.JPG',
    '../assets/imagens/construção2.jpeg',
    '../assets/imagens/construção3.jpeg',
    '../assets/imagens/construção4.jpeg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
