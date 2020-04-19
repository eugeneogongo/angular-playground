import {Component, Input, OnInit} from '@angular/core';
import {INew} from '../../services/INew';

@Component({
  selector: 'app-selected-news',
  templateUrl: './selected-news.component.html',
  styleUrls: ['./selected-news.component.css']
})
export class SelectedNewsComponent implements OnInit {
  @Input() Article: INew;

  constructor() {
  }

  ngOnInit(): void {

  }

}
