import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Atividade } from './atividade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private readonly API = 'http://localhost:3000/atividades'

  constructor(private http: HttpClient) { }

  listar(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.API)
  }

  criar(atividade: Atividade): Observable<Atividade> {
    return this.http.post<Atividade>(this.API, atividade)
  }

  editar(atividade: Atividade): Observable<Atividade> {
    const url = `${this.API}/${atividade.id}`
    return this.http.put<Atividade>(url, atividade )

  }

  excluir(id: number): Observable<Atividade> {
    const url = `${this.API}/${id}`
    return this.http.delete<Atividade>(url)
  }

  buscarPorId(id: number): Observable<Atividade> {
    const url = `${this.API}/${id}`
    return this.http.get<Atividade>(url)
  }

}
