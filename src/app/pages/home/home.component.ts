import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PrioritiesComponent } from "../../shared/components/priorities/priorities.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, PrioritiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
