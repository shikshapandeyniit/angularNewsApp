import { Component, OnInit, Input } from '@angular/core';
import {NewsServiceService} from '../news-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
data: any[];
  constructor(private searchService:NewsServiceService) { }
  @Input('news') news:any;
  ngOnInit() {
  	this.favorite();
  }

favorite() {
	this.searchService.favorite()
	.subscribe(res => {
		this.data=res

	})
}
delete(data:any) {
	this.searchService.delete(data)
	.subscribe(res =>{
		this.data= res

	})
}

}
