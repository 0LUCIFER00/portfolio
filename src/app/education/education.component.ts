import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
educationList = [
  {
    year: '2022–2025',
    title: 'Diploma in Information Technology and Data Science',
    institution: 'Nettur Technical Training Foundation',
    cgpa: '9.14',
  },
  {
    year: '2022–2025',
    title: 'Bachelor of Vocational in IT and Data Analytics',
    institution: 'Dayananda Sagar College of Engineering',
    cgpa: '9.05',
  },
  {
    year: '2021–2022',
    title: 'Senior Secondary Level',
    institution: 'Sri Vivekananda Matric Hr Sec School',
    percentage: '78%',
  },
];

}
