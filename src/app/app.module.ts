import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';
import { EdicaoComponent } from './edicao/edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    DiretivaComponent,
    FormReativoComponent,
    EdicaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }