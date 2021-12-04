import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Conheça-nos', url: 'conheca', icon: 'archive' },
    { title: 'Notícias', url: 'noticias', icon: 'newspaper' },
    { title: 'Galeria de Fotos', url: 'galeriadefotos', icon: 'images' },
  ];

  constructor() {}
}
