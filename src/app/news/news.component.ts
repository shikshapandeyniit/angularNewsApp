import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
    
})
export class NewsComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {}

     results:any;
    onreceive(s:any){
    this.results=s;
    console.log(this.results);
  }
 
 
}
  


