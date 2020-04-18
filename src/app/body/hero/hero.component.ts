import {Component, OnInit} from '@angular/core';
import {GetLatestNewsService} from '../../services/get-latest-news.service';
import {INew} from '../../services/INew';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  TopNews: INew[];
  Cover: INew;
  url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b696c810c9d4abb9b449986f6459402';

  constructor(private newsService: GetLatestNewsService) {
  }

  ngOnInit(): void {
    this.newsService.FetchNews(this.url).subscribe({
      next: data => {
        this.TopNews = data.articles;
        this.Cover = this.TopNews[parseInt(String(Math.random() * this.TopNews.length), 10)];
      },
      error: err => console.log(err)
    });
  }
}
