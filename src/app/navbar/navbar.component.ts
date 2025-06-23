import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery = '';
  showSuggestions = false;
  isMobileMenuOpen = false;
  windowWidth = window.innerWidth;
  activeLink = '';

  menuItems = [
    { label: 'About', id: 'about', type: 'scroll' },
    { label: 'Project', id: 'project', type: 'scroll' },
    { label: 'Experience', id: 'experience', type: 'scroll' },
    { label: 'Education', id: 'education', type: 'scroll' },
    { label: 'Contact', id: 'contact', type: 'scroll' },
    { label: 'Resume', href: 'Prajwal_M_resume.pdf', type: 'link' }
  ];

  filteredMenuItems = [...this.menuItems];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

  filterMenu() {
    const query = this.searchQuery.toLowerCase();
    this.filteredMenuItems = this.menuItems.filter(item => 
      item.label.toLowerCase().includes(query)
    );
    this.showSuggestions = query.length > 0;
  }

  scrollTo(id: string) {
    this.activeLink = id;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.windowWidth <= 768) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }
}