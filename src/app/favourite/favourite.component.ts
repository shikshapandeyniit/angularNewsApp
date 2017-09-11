import { Component, OnInit ,Input} from '@angular/core';
import {NewsServiceService} from '../news-service.service';
import { Http, Response } from '@angular/http'; 


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
	data:any[];

	constructor(private searchService:NewsServiceService) { }
	@Input('results') results :any;
  ngOnInit() {
  	
	 }
	/*favourite(){
  	  
  this.searchService.favourite()
  .subscribe(res=>{
  	this.data=res
    
  	
  })*/
	/*}
	delete(results:any){
  this.searchService.delete(results)
  .subscribe(res=>{
  	this.data=res
  })
	}*/
  

}
