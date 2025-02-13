import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss'
})
export class CardTaskComponent {

  @Input() title!: string;
  @Input() dateUpdate!: string;
  @Input() textContent!: string;

}
