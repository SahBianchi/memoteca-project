import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../thought-interface';
import { ThoughtComponent } from "../thought/thought.component";
import { ThoughtService } from '../thought.service';
import { BtnLoadMoreComponent } from "./btn-load-more/btn-load-more.component";

@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ThoughtComponent,
    BtnLoadMoreComponent
],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(
    private service: ThoughtService
  ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }
}
