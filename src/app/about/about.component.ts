import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports : [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    { name: 'Html & CSS', icon: 'html-css.png', width: '90px', height: '70px', highlight: false},
    { name: 'JavaScript', icon: 'js.png', width: '120px', height: '70px' },
    { name: 'Angular', icon: 'angular.png', width: '80px', height: '70px'},
    { name: 'C Progarm', icon: 'c.png', width: '70px', height: '70px'},
    { name: 'Java', icon: 'java.png', width: '80px', height: '70px'},
    { name: 'Python', icon: 'python.png', width: '70px', height: '60px'},
    { name: 'R Program', icon: 'r.png', width: '100px', height: '70px' },
    { name: 'SQL', icon: 'sql.png', width: '120px', height: '75px'},
    // { name: 'Flutter', icon: 'flutter.png' },
    // { name: 'Ubuntu', icon: 'ubuntu.png', highlight: false },
    // { name: 'Git Source Control', icon: 'git.png' },
    // { name: 'ERPNext', icon: 'erpnext.png' },
    // { name: 'Mongodb', icon: 'mongodb.png' },
    // { name: 'Frappe', icon: 'frappe.png' },
    // { name: '.Net', icon: 'dotnet.png' },
    // { name: 'Flask Microweb Framework', icon: 'flask.png' },
    // { name: 'AWS Server', icon: 'aws.png' }
  ];
}
