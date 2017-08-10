import { CourseService } from './../service/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = params.get('id');
        this.courseService.get(id)
          .subscribe(course => this.course = course);
      });
  }

}
