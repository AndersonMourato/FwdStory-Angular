import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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

  get isButtonText(): boolean {
    return this.buttonText ? true : false;
  }

}
