import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './hero/hero.component';
import {RouterModule} from "@angular/router";
import {SelectedNewsComponent} from './selected-news/selected-news.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HeroComponent, SelectedNewsComponent],
  exports: [
    HeroComponent,
    SelectedNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ]
})
export class BodyModule {
}
