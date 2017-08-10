import { UserService } from './service/user.service';
import { CourseService } from './service/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ListOfCoursesComponent } from './list-of-courses/list-of-courses.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent },
  { path: 'list-of-courses', component: ListOfCoursesComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfCoursesComponent,
    CourseDetailsComponent,
    ProfileComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    CourseService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
