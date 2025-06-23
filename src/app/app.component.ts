import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperienceTimelineComponent } from "./experience-timeline/experience-timeline.component";
import { ProjectComponent } from "./project/project.component";
import { EducationComponent } from "./education/education.component";
import { OtherComponent } from "./other/other.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, HomeComponent, AboutComponent, ContactComponent, ExperienceTimelineComponent, ProjectComponent, EducationComponent, OtherComponent]
})
export class AppComponent {
}
