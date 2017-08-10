import { CourseService } from './../service/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css']
})
export class ListOfCoursesComponent implements OnInit {
  courses;
  order = {
    id: 1,
    title: 1,
    startsOn: 1
  };

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  private toggleOrder(attr) {
    this.order[attr] = -this.order[attr];
    const params = { order: {} };
    params.order[attr] = this.order[attr] === 1 ? 'ASC' : 'DESC';
    this.getCourses(params);
  }

  private getCourses(params = {}) {
    this.courseService.getAll(params)
      .subscribe(courses => this.courses = courses);
  }

  enroll(id) {
    alert(id);
  }

}
