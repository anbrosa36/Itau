import { Router } from '@angular/router';
import { AtividadeService } from '../atividade.service';
import { Atividade } from '../atividade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-atividade',
  templateUrl: './criar-atividade.component.html',
  styleUrls: ['./criar-atividade.component.css']
})
export class CriarAtividadeComponent implements OnInit {

  atividade: Atividade = {

    atividade: '',
    classificacao: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: AtividadeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarAtividade() {
    this.service.criar(this.atividade).subscribe(() => {
      this.router.navigate(['/listarAtividade'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarAtividade'])
  }

}
