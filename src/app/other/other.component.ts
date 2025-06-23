import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  imports: [CommonModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
certificates = [
    'Angular - The Complete Guide (2025 Edition)',
    'NSDC Level 3',
    'Infosys Springboard Program',
    'Cisco Networking Academy',
    'Wadhawani Foundation - English for Employability',
  ];

  softSkills = [
    'Problem Solving',
    'Multitasking',
    'Observation',
    'Adaptability',
    'Communication',
    'Time Management',
  ];

  hobbies = [
    'Coding',
    'Learning New Technologies',
    'Gaming',
    'Travelling',
    'Music',
  ];
}
