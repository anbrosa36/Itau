import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarAtividadeComponent } from './componentes/atividades/criar-atividade/criar-atividade.component';
import { ListarAtividadeComponent } from './componentes/atividades/listar-atividade/listar-atividade.component';
import { AtividadeComponent } from './componentes/atividades/atividade/atividade.component';
import { ExcluirAtividadeComponent } from './componentes/atividades/excluir-atividade/excluir-atividade.component';
import { EditarAtividadeComponent } from './componentes/atividades/editar-atividade/editar-atividade.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarAtividadeComponent,
    ListarAtividadeComponent,
    AtividadeComponent,
    ExcluirAtividadeComponent,
    EditarAtividadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
