import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http'; 

import {NewsServiceService} from '../news-service.service';

//import {RouterModule,Routes} from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
  
})

export class  NewsDetailsComponent {
favourite:any={}
  constructor(private searchService: NewsServiceService){}

  @Input('results') results :any;

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

  
