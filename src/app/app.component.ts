import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-aula';
  nome: string = 'Guilherme';
  idade: number = 27;

  trocarNome(){
    this.nome = "Gustavo";
  }
}
