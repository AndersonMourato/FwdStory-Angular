import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss'
})
export class CardTaskComponent implements OnInit {

  @Input() title!: string;
  @Input() dateUpdate!: string;
  @Input() textContent!: string;

  constructor(private dialog: MatDialog) { }

  onClick() {
    this.dialog.open(ModalComponent, {
      height: 'auto',
      width: 'auto',
    });

  }

  ngOnInit() {
    //this.onClick();
  }

}
