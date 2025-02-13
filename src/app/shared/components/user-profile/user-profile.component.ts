import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ MatButtonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  @Input() srcImage!: string;
  @Input() altImage!: string;
  @Input() userName!: string;
  @Input() jobTitle!: string;

}
