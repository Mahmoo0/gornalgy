import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './start/start.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpModule} from '@angular/http';
import {MatTabsModule} from '@angular/material/tabs';
import { FirstnewsComponent } from './firstnews/firstnews.component';
import { HttpClientModule, /* other http imports */ } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgnewsModule } from 'angular-news-api';
import { NewsApiKeyConfig } from 'angular-news-api';
import { HomeNewsComponent } from './home/home-news/home-news.component';
import { SportComponent } from './home/sport/sport.component';
import { BusinessComponent } from './home/business/business.component';
import { EgynewsComponent } from './home/egynews/egynews.component';
import { TecComponent } from './home/tec/tec.component';
import { EntertainmentComponent } from './home/entertainment/entertainment.component';
import { FollowComponent } from './follow/follow.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import {MatProgressBarModule} from '@angular/material/progress-bar';
const newsApiConfig: NewsApiKeyConfig = {
  key: 'df985d8dddd44d80a730f63a4881e507'
};
var config  = {
  apiKey: "AIzaSyAOtZr1I0R_wBadAQx-cXeejXhivIN2Ado",
  authDomain: "gornalgy-b8f4b.firebaseapp.com",
  databaseURL: "https://gornalgy-b8f4b.firebaseio.com",
  projectId: "gornalgy-b8f4b",
  storageBucket: "gornalgy-b8f4b.appspot.com",
  messagingSenderId: "1069749406830",
  appId: "1:1069749406830:web:f33fe7ce9dce1a04"
};


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FirstnewsComponent,
    HomeNewsComponent,
    SportComponent,
    BusinessComponent,
    EgynewsComponent,
    TecComponent,
    EntertainmentComponent,
    FollowComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    NgnewsModule.forRoot(newsApiConfig),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    MatProgressBarModule,

    MatTabsModule,
    RouterTestingModule,
    HttpClientModule,
    HttpModule,

    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule,
    RouterModule.forRoot([
      { path:'',component:HomeNewsComponent},
      { path:'tec',component:TecComponent},
      { path:'sports',component:SportComponent},
      { path:'entertainment',component:EntertainmentComponent},
      { path:'egynews',component:EgynewsComponent},
      { path:'business',component:BusinessComponent},
      { path:'login',component:LoginComponent},


      ]
    ),],

  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
