import { Component } from '@angular/core';
import { CourseCategory } from '../../../models/course-category';
import { MOCK_COURSE_CATEGORIES } from '../../../mock/mockCourseCategories';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: Array<CourseCategory> = [];

  constructor() {
    this.categories = MOCK_COURSE_CATEGORIES;
  }
}
