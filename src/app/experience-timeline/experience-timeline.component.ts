import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-timeline',
  imports: [CommonModule],
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.css']
})
export class ExperienceTimelineComponent {
  experienceList = [
    {
    year: '2025-Present',
    title: 'Junior Software Developer',
    company: 'ScalarAt Pvt. Ltd.',
    place: 'Electronic City, Bangalore',
    description: `Currently interning as a Junior Software Developer for a period of 6 months. 
    Working on real-world Angular and Node.js projects, learning full-stack development, 
    gaining hands-on experience in API integration, SQL database design, and responsive UI creation.`,
  },
  ];
}
