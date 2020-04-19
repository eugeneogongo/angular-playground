import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateformatterPipe} from './dateformatter.pipe';


@NgModule({
  declarations: [DateformatterPipe],
  exports: [
    DateformatterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
