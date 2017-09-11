import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {NewsServiceService} from '../news-service.service';
import { Http, Response } from '@angular/http'; 

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {
	post:any=[];
  results:any=[];
	@Output() receive = new EventEmitter<any>();
	
  //searchTerm$ : any=[]; 
 constructor(private searchService: NewsServiceService){}
ngOnInit() {

      this.searchService.search()
      .subscribe(post => {        
        this.post = post.sources;
        });
    }
 
      search(searchTerm$){
      this.searchService.searchEntries(searchTerm$)
      .subscribe(data => {        
        this.results = data.articles;
         console.log(this.results)
         this.receive.emit(this.results)
      });
}
    }
  

  
