import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { Pensamento } from '../thought-interface';

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
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private router: Router,
    private service: ThoughtService
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }
}
