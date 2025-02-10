import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../thought-interface';
import { ThoughtComponent } from "../thought/thought.component";
import { ThoughtService } from '../thought.service';
import { BtnLoadMoreComponent } from "./btn-load-more/btn-load-more.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ThoughtComponent,
    BtnLoadMoreComponent,
    FormsModule
],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu mural';

  constructor(
    private service: ThoughtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos;
      })
  }

  recarregarComponente() {
    this.titulo = 'Meu mural';
    this.favoritos = false;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  listarFavoritos(){
    this.titulo = 'Meus favoritos';
    this.favoritos = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentosFavoritos => {
        this.listaPensamentos = listaPensamentosFavoritos;
        this.listaFavoritos = listaPensamentosFavoritos;
      })
  }
}
