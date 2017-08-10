import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CourseService } from './course.service';

describe('CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService],
      imports: [ HttpModule ]
    });
  });

  it('should be created', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));
});
