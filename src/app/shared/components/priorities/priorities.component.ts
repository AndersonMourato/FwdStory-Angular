import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { CardTaskComponent } from "../card-task/card-task.component";



@Component({
  selector: 'app-priorities',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, SectionHeaderComponent, CardTaskComponent],
  templateUrl: './priorities.component.html',
  styleUrl: './priorities.component.scss'
})
export class PrioritiesComponent {

}
