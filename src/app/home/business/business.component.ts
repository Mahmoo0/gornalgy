import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Config } from 'protractor';
import { Response } from '@angular/http';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  configService: any;
  config: { heroesUrl: any; textfile: any; };
article: Array<any>;
  constructor() { }

  ngOnInit() {
    const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('df985d8dddd44d80a730f63a4881e507');
  newsapi.v2.topHeadlines({


    country: 'us',
    category: 'business',

  }).then(response => {
    console.log(response);
    this.article = (response['articles']);
    console.log(this.article);
  });
  }


}
