import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import {Routes , RouterModule } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }
  navLinks = [
    {path: '', label: 'General'},
    {path: 'tec', label: 'Technology'},
    {path: 'sports', label: 'Sports'},
    {path: 'business', label: 'Business'},
    {path: 'entertainment', label: 'Entertainment'},
    {path: 'egynews', label: 'EgyNews'},



];
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  ngOnInit() {
  }
  reovenews() {
    let x = document.getElementById('tabs');
    x.style.display = 'none';

  }
  getnews() {
    let x = document.getElementById('tabs');
    x.style.display = 'block';
  }
}
