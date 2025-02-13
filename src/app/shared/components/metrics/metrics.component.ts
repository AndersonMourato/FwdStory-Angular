import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [SectionHeaderComponent],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.scss'
})
export class MetricsComponent {

}
