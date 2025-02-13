import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PrioritiesComponent } from "../../shared/components/priorities/priorities.component";
import { MetricsComponent } from "../../shared/components/metrics/metrics.component";
import { AspirationsComponent } from "../../shared/components/aspirations/aspirations.component";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { AccomplishmentsComponent } from "../../shared/components/accomplishments/accomplishments.component";
import { UserProfileComponent } from "../../shared/components/user-profile/user-profile.component";
import { ViewSecondaryComponent } from "../../shared/components/view-secondary/view-secondary.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, PrioritiesComponent, MetricsComponent, AspirationsComponent, HeaderComponent, FooterComponent, AccomplishmentsComponent, UserProfileComponent, ViewSecondaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
