import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from '../news-service.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
post:any=[];
  constructor(private searchService:NewsServiceService) { }

  ngOnInit() {

      this.searchService.topNews()
      .subscribe(post => {        
        this.post = post;
        console.log(this.post);
        });
    }
    favourite:any={}
    add(detail:any){
  	this.favourite={
  		"title":detail.title,
  		"description":detail.description,
  		"urlToImage":detail.urlToImage
  	}
  
  this.searchService.add(this.favourite).subscribe((data)=>{
  	console.log(data);
  })
	}
}
