import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { ListOfCoursesComponent } from './list-of-courses.component';
import { CourseService } from '../service/course.service';

describe('ListOfCoursesComponent', () => {
  let component: ListOfCoursesComponent;
  let fixture: ComponentFixture<ListOfCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCoursesComponent ],
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        CourseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const service = TestBed.get(CourseService);
    spyOn(service, 'getAll').and.returnValue(Observable.of([]));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
