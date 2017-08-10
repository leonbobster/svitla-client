import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { ProfileComponent } from './profile.component';
import { UserService } from '../service/user.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        RouterTestingModule,
        HttpModule
      ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const service = TestBed.get(UserService);
    spyOn(service, 'get').and.returnValue(Observable.of({}));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
