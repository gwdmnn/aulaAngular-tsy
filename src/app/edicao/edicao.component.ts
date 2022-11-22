import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IContato from 'src/interfaces/interface';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {
  contato: IContato = {nome:"",email:"",fone:""}
  msg: string = ''

  constructor(private route: ActivatedRoute, private service:CadastroService){ }  // --> serve para injetar padrões de rotas e services para esse componente

  ngOnInit(): void {
    var routeParams = this.route.snapshot.paramMap                         //busca os parâmetros disponíveis na roda (URL)
    let id = parseInt(routeParams.get('idContato')||'')                     // busca o valor dentro do id que consta na rota
    this.service.consultarPorId(id).subscribe(data => this.contato = data)  // busca os atributos do contato no service através do id, e cria um objeto contato com essas infos
  }

  alterar(){
    this.service.alterar(this.contato.id || 0, this.contato).subscribe(() => this.msg = "Registro alterado com sucesso" )
  }

}

