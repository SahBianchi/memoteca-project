import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-create-thought',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-thought.component.html',
  styleUrl: './create-thought.component.css'
})
export class CreateThoughtComponent {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private service: ThoughtService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario Reativo'],
      autoria: ['angular'],
      modelo: ['modelo1']
    });
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
