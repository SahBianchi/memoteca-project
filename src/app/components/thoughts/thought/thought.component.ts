import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pensamento } from '../thought-interface';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.css'
})
export class ThoughtComponent {
   @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  };

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(
    private service: ThoughtService,
  ) { }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) {
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    })
  }

}
