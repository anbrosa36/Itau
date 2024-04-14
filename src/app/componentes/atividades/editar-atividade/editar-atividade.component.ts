import { Router, ActivatedRoute } from '@angular/router';
import { AtividadeService } from '../atividade.service';
import { Atividade } from '../atividade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-atividade',
  templateUrl: './editar-atividade.component.html',
  styleUrls: ['./editar-atividade.component.css']
})
export class EditarAtividadeComponent implements OnInit {

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

  editarAtividade() {
    this.service.editar(this.atividade).subscribe(() => {
      this.router.navigate(['/listarAtividade'])
    })

  }

  cancelar() {
    this.router.navigate(['/listarAtividade'])
  }

}
