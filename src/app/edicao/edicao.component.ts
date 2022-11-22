import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit{
  emailContato: String | null ='';
  constructor(private router: ActivatedRoute){

  }

ngOnInit(): void{
  const routeParams = this.router.snapshot.paramMap;
  this.emailContato = routeParams.get('email');
}


}


