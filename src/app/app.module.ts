import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationModule} from './navigation/navigation.module';
import {BodyModule} from './body/body.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { TopnewsComponent } from './topnews/topnews.component';
import {PipesModule} from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    TopnewsComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    BodyModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent, pathMatch: 'full'}
    ]),
    PipesModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
