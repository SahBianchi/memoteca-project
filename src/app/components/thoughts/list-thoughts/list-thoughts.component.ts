import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  constructor(
    private service: ThoughtService
  ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos;
      })
  }
}
