import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent {
  mostrar: boolean = false;
  rotulo: string = "show";

  showHide(){
    if (this.mostrar){
      this.mostrar = false;
      this.rotulo = "show";
    } 
    else{
      this.mostrar = true;
      this.rotulo = "hide";
    }
  }

  carros: any = ["Fusca", "Brasilia", "Kombi", "TL", "Rural Willis"]

  contatos: any = [
    {nome:"Guilherme", email:"guilherme@email.com", fone:"(47)99999-9999"},
    {nome:"Gustavo", email:"gustavo@email.com", fone:"(47)99999-9999"},
    {nome:"Max", email:"max@email.com", fone:"(47)99999-9999"}
  ]



}
