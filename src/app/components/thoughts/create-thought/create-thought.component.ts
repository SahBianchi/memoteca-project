import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css'
})
export class CreateThoughtComponent {
  //pensamento = atributo que vai ser um objeto
  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert('Pensamento criado com sucesso!');
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }
}
