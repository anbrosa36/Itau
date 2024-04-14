import { AtividadeService } from '../atividade.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade';

@Component({
  selector: 'app-listar-atividade',
  templateUrl: './listar-atividade.component.html',
  styleUrls: ['./listar-atividade.component.css']
})
export class ListarAtividadeComponent implements OnInit {

  listaAtividades: Atividade[] = [];

  constructor(private service: AtividadeService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaAtividades) => {
      this.listaAtividades = listaAtividades
    })
  }
}

