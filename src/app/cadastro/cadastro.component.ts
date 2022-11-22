import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import Icontato from "../../interfaces/interface"


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  listaContatos: Icontato[] = [];
  msg: String = '';

  constructor(private service:CadastroService){
    this.consultar();
  }

  enviar(dados:Icontato){
    //this.listaContatos.push(dados)
    this.service.salvar(dados).subscribe(data => {
      this.msg = "Registro inserido com sucesso";
      
      this.listaContatos = [...this.listaContatos, data]
    })

  }

  consultar(){
    this.service.consultar().subscribe(data => this.listaContatos = data);
  }

}
