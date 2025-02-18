import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../card-task/modal/modal.component';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() buttonText!: string;

  constructor(private modal: MatDialog) {}

  get isButtonText(): boolean {
    return this.buttonText ? true : false;
  }

  onButtonClick(): void {
    this.modal.open(ModalComponent);
  }
  
}
