import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './hero/hero.component';
import {RouterModule} from '@angular/router';
import {SelectedNewsComponent} from './selected-news/selected-news.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PipesModule} from '../pipes/pipes.module';



@NgModule({
  declarations: [HeroComponent, SelectedNewsComponent],
  exports: [
    HeroComponent,
    SelectedNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    PipesModule,

  ]
})
export class BodyModule {
}
