import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { CourseDetailsComponent } from './course-details.component';
import { CourseService } from '../service/course.service';

describe('CourseDetailsComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseDetailsComponent
      ],
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
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const service = TestBed.get(CourseService);
    spyOn(service, 'getAll').and.returnValue(Observable.of([]));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
