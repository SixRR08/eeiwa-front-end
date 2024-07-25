import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SigninComponent} from './components/signin/signin.component';
import {LogedinComponent} from './components/logedin/logedin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {SignupComponent} from './components/signup/signup.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {NewsComponent} from './components/news/news.component';
import {ChatComponent} from './components/chat/chat.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DepartmentsComponent} from './components/departments/departments.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { DayoffComponent } from './components/dayoff/dayoff.component';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LogedinComponent,
    SignupComponent,
    CalendarComponent,
    NewsComponent,
    ChatComponent,
    ProfileComponent,
    DepartmentsComponent,
    DayoffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
