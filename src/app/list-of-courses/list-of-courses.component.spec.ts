import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';

import { ListOfCoursesComponent } from './list-of-courses.component';
import { CourseService } from '../service/course.service';
import { UserService } from '../service/user.service';

describe('ListOfCoursesComponent', () => {
  let component: ListOfCoursesComponent;
  let fixture: ComponentFixture<ListOfCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCoursesComponent ],
      imports: [
        RouterTestingModule,
        HttpModule,
        NgxPaginationModule
      ],
      providers: [
        CourseService,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCoursesComponent);
    component = fixture.componentInstance;

    const courseService = TestBed.get(CourseService);
    spyOn(courseService, 'getAll').and.returnValue(Observable.of([]));
    const userService = TestBed.get(UserService);
    spyOn(userService, 'get').and.returnValue(Observable.of({}));

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
