import { UserService } from './../service/user.service';
import { CourseService } from './../service/course.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css']
})
export class ListOfCoursesComponent implements OnInit {
  courses: Observable<any>;
  params;
  currentPage = 1;
  totalItems;
  itemsPerPage = 10;
  userId = 1; /* should be retrieved from authorization service */

  constructor(private courseService: CourseService, private userService: UserService) {
    this.params = { order: { id: 'ASC' } };
  }

  ngOnInit() {
    this.getCourses();
  }

  private toggleOrder(attr: string) {
    const p = this.params;
    if (p.order[attr] && p.order[attr] === 'ASC') {
      p.order[attr] = 'DESC';
    } else {
      p.order = {};
      p.order[attr] = 'ASC';
    }
    this.getCourses();
  }

  private getPage(page: number) {
    this.currentPage = page;
    this.getCourses();
  }

  private getCourses() {
    this.params['offset'] = this.itemsPerPage * (this.currentPage - 1);
    this.params['limit'] = this.itemsPerPage;
    this.courses = this.courseService.getAll(this.params)
      .do(response => this.totalItems = response.total)
      .map(response => response.items);
  }

  private enroll(id) {
    const resourse = {
      id: this.userId,
      courses: [{ id: id }]
    };
    this.userService.update(resourse)
      .subscribe(user => alert('You have been enrolled to the course!'));
  }

}
