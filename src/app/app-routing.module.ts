import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule } from '@angular/router';
import { HomeNewsComponent } from './home/home-news/home-news.component';
import { TecComponent } from './home/tec/tec.component';
import { SportComponent } from './home/sport/sport.component';
import { EntertainmentComponent } from './home/entertainment/entertainment.component';
import { EgynewsComponent } from './home/egynews/egynews.component';
import { BusinessComponent } from './home/business/business.component';
import { LoginComponent } from './login/login.component';
import { FollowComponent } from './follow/follow.component';

const routes: Routes = [
{ path: '', component: HomeNewsComponent},
{ path: 'tec', component: TecComponent},
{ path: 'sports', component: SportComponent},
{ path: 'entertainment', component: EntertainmentComponent},
{ path: 'egynews', component: EgynewsComponent},
{ path: 'business', component: BusinessComponent},
{ path: 'login', component: LoginComponent},
{ path: 'follow', component: FollowComponent},
];
@NgModule({

  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
