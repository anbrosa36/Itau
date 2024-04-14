import { CriarAtividadeComponent } from './componentes/atividades/criar-atividade/criar-atividade.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAtividadeComponent } from './componentes/atividades/listar-atividade/listar-atividade.component';
import { ExcluirAtividadeComponent } from './componentes/atividades/excluir-atividade/excluir-atividade.component';
import { EditarAtividadeComponent } from './componentes/atividades/editar-atividade/editar-atividade.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarAtividade',
    pathMatch: 'full'
  },
  {
    path: 'criarAtividade',
    component: CriarAtividadeComponent
  },
  {
    path: 'listarAtividade',
    component: ListarAtividadeComponent
  },
  {
    path: 'atividades/excluirAtividade/:id',
    component: ExcluirAtividadeComponent
  },
  {
    path: 'atividades/editarAtividade/:id',
    component: EditarAtividadeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
