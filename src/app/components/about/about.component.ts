import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
skills = [
  { name: 'Angular', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 }
];

}
