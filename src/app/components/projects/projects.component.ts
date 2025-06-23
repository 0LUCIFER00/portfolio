import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('staggerIn', [
      transition(':enter', [
        query('.project-card', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Smart Transpo Connect',
      description: 'A transport service portal like Parivahan, built with Angular and Node.js.',
      image: 'assets/projects/project1.png',
      link: 'https://yourproject1.com'
    },
    {
      title: 'Expense Tracker',
      description: 'A personal finance management app with category-wise breakdown and charts.',
      image: 'assets/projects/project2.png',
      link: 'https://yourproject2.com'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio site built with Angular standalone components.',
      image: 'assets/projects/project3.png',
      link: 'https://yourportfolio.com'
    }
  ];
}
