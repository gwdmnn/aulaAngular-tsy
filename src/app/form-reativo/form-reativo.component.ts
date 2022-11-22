import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent {
  formContato = new FormGroup({
    nome: new FormControl('Guilherme'),
    email: new FormControl('guilherme@email.com'),
    fone: new FormControl('47 98888-7777')
  })  
  
  //form control
  nome = new FormControl('Guilherme Weidmann')

  enviar(){
    console.log(`Nome: ${this.nome.value}`)
  }


}
