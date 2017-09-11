import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { FavoriteComponent } from './favorite/favorite.component';
import {NewsServiceService} from './news-service.service';
import { TopNewsComponent } from './top-news/top-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsSearchComponent,
    NewsDetailsComponent,
    FavoriteComponent,
    TopNewsComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path:'news',
      component:NewsComponent
    },
    {
      path:'topNews',
      component:TopNewsComponent
    },
    {
      path:'search',
      component:NewsComponent
    },
    {
      path:'details',
      component:NewsDetailsComponent

    },
    {
      path:'fav',
      component:FavoriteComponent
    },
    {
      path:'',
      redirectTo:'/topNews',
      pathMatch:'full'
    }
    ])

    
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
