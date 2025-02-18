import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../card-task/modal/modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private dialogRef: MatDialog){}

  addPriority(): void {
    this.dialogRef.open(ModalComponent);
  }

}
