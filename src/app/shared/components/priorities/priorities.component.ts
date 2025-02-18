import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { CardTaskComponent } from "../card-task/card-task.component";
import { IPriority } from '../../../core/models/priority.interface';
import { PriorityService } from '../../../core/services/priority.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-priorities',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, SectionHeaderComponent, CardTaskComponent, CommonModule],
  templateUrl: './priorities.component.html',
  styleUrl: './priorities.component.scss'
})
export class PrioritiesComponent implements OnInit {

  priorities: IPriority[] = [];

  constructor(private priorityService: PriorityService) {}
  
  ngOnInit() {
    this.getPriority();
  }
  
  getPriority() {
    this.priorities = this.priorityService.getPriorities();
  }
    
}
