import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from "./news.component";
import {NewsRoutingModule} from "./news-routing.module";


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule {
}
