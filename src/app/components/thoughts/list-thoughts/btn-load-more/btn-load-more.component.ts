import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-load-more',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-load-more.component.html',
  styleUrl: './btn-load-more.component.css'
})
export class BtnLoadMoreComponent {

  @Input() haMaisPensamentos: boolean = false;

}
