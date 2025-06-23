import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
   items = [
    { image: 'census_connect.png', title: 'Census Connect', description: ' Revolutionize the Indian census process by developing an online platform for households to update their information annually. This digital platform will enable real-time data collection.' },
    { image: 'smart_transpo_connect.png', title: 'Smart Transpo Connect', description: ' The Digital Portal for Transport Services solves these by automating tasks like vehicle registration, driving license renewal, traffic fine payments, and more. This system makes everything faster, more accurate, and better.' },
    { 
      image: 'expense_tracker.png', 
      title: 'Expense Tracker', 
      description: 'Track daily expenses, manage budgets, and visualize spending trends with an intuitive and user-friendly interface.' 
    },
    // { image: 'url4.png', title: 'Project 4', description: 'Short description.' },
    // { image: 'url5.png', title: 'Project 5', description: 'Short description.' },
    // { image: 'url6.png', title: 'Project 6', description: 'Short description.' },
  ];
}
