import { Component } from '@angular/core';
import { Pensamento } from '../thought-interface';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  standalone: true,
  imports: [],
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.css'
})
export class DeleteThoughtComponent {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }


  cancelar(){
    this.router.navigate(['/listarPensamento']);
  }

}
