import { Component } from '@angular/core';

interface Icontato{
  nome: String,
  email: String,
  fone: String;
}
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  listaContatos: Icontato[] = [];

  constructor(){
  }

  enviar(dados:Icontato){
    this.listaContatos.push(dados)

  }

}
