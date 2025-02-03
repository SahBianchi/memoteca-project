import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pensamento } from '../thought-interface';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-thought',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent {
  formulario!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
      })
    })
  }

    editarPensamento() {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }

    cancelar(){
      this.router.navigate(['/listarPensamento']);
    }

    habilitarBotao(): string {
      if(this.formulario.valid) {
        return "botao"
      }
      else return "botao__desabilitado"
    }
}


