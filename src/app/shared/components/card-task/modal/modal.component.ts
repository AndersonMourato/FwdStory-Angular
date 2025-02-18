import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IPriority } from '../../../../core/models/priority.interface';

@Component({
  selector: 'app-modal',
  standalone: true, 
  imports: [MatDialogModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatButtonModule, CommonModule], // Importa módulos necessários
  templateUrl: './modal.component.html', 
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit, OnChanges { 
  formModalGroup!: FormGroup;
  dateUpdate!: string; 
  @Output() eventSave: EventEmitter<IPriority> = new EventEmitter<IPriority>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IPriority,
    private fb: FormBuilder ,
    private dialogRef: DialogRef<ModalComponent>
  ) { }

  ngOnInit(): void {
    this.initForm(); 
    if (this.data) { 
      this.updateForm(this.data);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) { 
      this.updateForm(changes['data'].currentValue);
    }
  }

  private initForm(): void { 
    this.formModalGroup = this.fb.group({ 
      title: ['', Validators.required], 
      textContent: ['', Validators.required],
      concluded: [false]
    });
  }

  private updateForm(data: IPriority): void { 
    this.dateUpdate = data.dateUpdate;
    this.formModalGroup.patchValue({ 
      title: data.title,
      textContent: data.textContent,
      concluded: data.concluded
    });
  }

  private getDateCurret(): string {
     return new Date().toISOString();
  }
  
  onSave(): void {
    if (this.formModalGroup.valid) {
      const data: IPriority = {
        ...this.formModalGroup.value,
        dateUpdate: this.getDateCurret()
      };
      this.eventSave.emit(data);
      this.dialogRef.close();
    }
  }



}





