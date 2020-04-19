import { Component, OnInit } from '@angular/core';
import {GetLatestNewsService} from "../services/get-latest-news.service";
import {INew} from "../services/INew";

@Component({
  selector: 'app-topnews',
  templateUrl: './topnews.component.html',
  styleUrls: ['./topnews.component.css']
})
export class TopnewsComponent implements OnInit {
  news: INew[];
  url = 'https://newsapi.org/v2/everything?q=apple&from=2020-04-18&to=2020-04-18&sortBy=popularity&apiKey=4b696c810c9d4abb9b449986f6459402';
  constructor(private newservice: GetLatestNewsService) { }

  ngOnInit(): void {
this.newservice.FetchNews(this.url).subscribe({
  next: data => {
    this.news = data.articles;
    },
  error: err => console.log(err)
});
  }

}
