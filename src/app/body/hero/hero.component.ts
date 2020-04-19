import {Component, OnInit} from '@angular/core';
import {GetLatestNewsService} from '../../services/get-latest-news.service';
import {INew} from '../../services/INew';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  TopNews: INew[];
  Cover: INew;
  selectedArticle: INew;
  url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4b696c810c9d4abb9b449986f6459402';

  constructor(private newsService: GetLatestNewsService, private meta: Meta) {
    this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.addTag({ name: 'twitter:site', content: '@eugene_odera' });
    this.meta.addTag({ name: 'twitter:title', content: 'News API' });
    this.meta.addTag({ name: 'twitter:description', content: 'Made by Eugene With Love' });
    this.meta.addTag({ name: 'twitter:image', content: 'https://alligator.io/images/front-end-cover.png' });
  }

  ngOnInit(): void {
    const context = this;
    this.newsService.FetchNews(this.url).subscribe({
      next: data => {
        this.TopNews = data.articles;
        this.Cover = this.TopNews[parseInt(String(Math.random() * this.TopNews.length), 10)];
        this.selectedArticle = this.TopNews[parseInt(String(Math.random() * this.TopNews.length), 10)];
        // context.changeTopStory();
      },
      error: err => console.log(err)
    });
  }

  changeTopStory(): void {
    const context = this;
    setTimeout(() => {
      context.Cover = context.TopNews[parseInt(String(Math.random() * context.TopNews.length), 10)];
      context.changeTopStory();
    }, 10000);
  }
}
