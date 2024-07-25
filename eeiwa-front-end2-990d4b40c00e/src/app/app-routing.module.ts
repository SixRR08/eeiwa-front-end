import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {LogedinComponent} from './components/logedin/logedin.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {NewsComponent} from './components/news/news.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ChatComponent} from './components/chat/chat.component';
import {DepartmentsComponent} from './components/departments/departments.component';
import {DayoffComponent} from './components/dayoff/dayoff.component';


const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: LogedinComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'dayoff',
    component: DayoffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
