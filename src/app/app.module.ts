import { CardsService } from './services/cards.service';
import { coursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { APIConsumeComponent } from './apiconsume/apiconsume.component';

import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotFoundError } from './common/not-found-error';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    coursesComponent,
    APIConsumeComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      
      {
        path:'carddetails',
        component:APIConsumeComponent
      },
      {
        path:'**',
        component:NotFoundError
      }

    ])



  ],
  providers: [
    CardsService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
