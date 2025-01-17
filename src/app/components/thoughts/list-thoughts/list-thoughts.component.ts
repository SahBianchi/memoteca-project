import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../thought-interface';
import { ThoughtComponent } from "../thought/thought.component";
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ThoughtComponent
],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {
  listaPensamentos: Pensamento[] = [];

  constructor(
    private service: ThoughtService
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
