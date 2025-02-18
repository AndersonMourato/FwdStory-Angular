import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPriority } from '../../../core/models/priority.interface';
import { PriorityService } from '../../../core/services/priority.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-card-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.scss'
})
export class CardTaskComponent {

  @Input() priority!: IPriority;

  constructor(private dialog: MatDialog, private priorityService: PriorityService) { }

  onClick() {
    const dialogRef = this.dialog.open(ModalComponent, {
      height: 'auto',
      width: 'auto',
      data: this.priority,
    });

    dialogRef.componentInstance.eventSave.subscribe((result: IPriority) => {
      this.priority = result;
      this.priorityService.updatePriority(result);
    });
  }


}
