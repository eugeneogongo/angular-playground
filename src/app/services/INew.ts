import {ISource} from './ISource';

export interface INew {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: ISource;
}

export interface INewsResponse {
  status: string;
  totalResults: number;
  articles: INew[];

}
