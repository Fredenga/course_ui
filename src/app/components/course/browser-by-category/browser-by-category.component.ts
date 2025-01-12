import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { MOCK_COURSES } from '../../../mock/mockCourses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browser-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browser-by-category.component.html',
  styleUrl: './browser-by-category.component.css',
})
export class BrowserByCategoryComponent {
  courses: Array<Course> = [];

  constructor() {
    this.courses = MOCK_COURSES;
  }
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }
}
