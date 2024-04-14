import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeService } from '../atividade.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade';

@Component({
  selector: 'app-excluir-atividade',
  templateUrl: './excluir-atividade.component.html',
  styleUrls: ['./excluir-atividade.component.css']
})
export class ExcluirAtividadeComponent implements OnInit {

  atividade: Atividade = {
    id: 0,
    atividade: '',
    classificacao: '',
    modelo: ''
  }

  constructor(
    private service: AtividadeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((atividade) => {
      this.atividade = atividade
    })
  }

  excluirAtividade() {
    if(this.atividade.id) {
      this.service.excluir(this.atividade.id).subscribe(() => {
        this.router.navigate(['/listarAtividade'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarAtividade'])
  }

}
