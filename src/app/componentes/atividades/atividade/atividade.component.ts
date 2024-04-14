import { Atividade } from '../atividade';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  @Input() atividade: Atividade = {
    id: 0,
    atividade: 'I love Angular',
    classificacao: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraAtividade(): string {
    if(this.atividade.atividade.length >= 256) {
      return 'atividade-g'
    }
    return 'atividade-p'
  }

}
