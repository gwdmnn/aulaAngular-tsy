import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Icontato from '../interfaces/interface'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  consultar(){
    return this.http.get<[Icontato]>('http://localhost:3000/contatos')  
  }

  consultarPorId(id: number){
    return this.http.get<Icontato>(`http://localhost:3000/contatos/${id}`)  
  }

  alterar(id:number, dados:Icontato){
    return this.http.put<Icontato>(`http://localhost:3000/contatos/${id}`, dados)  
  }
  
  salvar(dados:any){
    return this.http.post<Icontato>('http://localhost:3000/contatos', dados)  
  }

}
