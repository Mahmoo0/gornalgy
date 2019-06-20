import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  constructor() { }
  papers: any[] = [
              { name : 'BBC', link: 'https://www.bbc.co.uk/news', id: '1', img: 'src/19.jpg' },
              { name : 'CNN', link: 'https://www.cbb.com', id: '2', img: 'src/21.jpg' },
              { name : 'TECH READAR', link: 'https://www.techreader.com', id: '3', img: 'src/104.jpg' },
              { name : 'THE VERGE', link: 'https://www.verge.com', id: '3', img: 'src/105.jpg' },
              { name : 'BBC SPORT', link: 'https://www.bbc.co.uk/sport', id: '3', img: 'src/110.jpg' },


  ];

  ngOnInit() {
  }
  follow(plink, newsid) {
console.log('you follow' + newsid);
document.getElementById(newsid).style.display = 'block';

document.getElementById(plink).style.display = 'none';
 }
  unfollow(plink, newsid) {
    console.log('you unfollow' + newsid);
    document.getElementById(newsid).style.display = 'none';
document.getElementById(plink).style.display = 'block';
      }



}
