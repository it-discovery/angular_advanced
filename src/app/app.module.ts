import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BooksComponent} from './books/books.component';
import {BookService} from "./book.service";
import {QuotePipe} from "./quote.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookRegistrationComponent} from './book-registration/book-registration.component';
import {HighlightDirective} from "./highlight.directive";
import {BookDetailsComponent} from './book-details/book-details.component';
import {provideHttpClient} from "@angular/common/http";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {NewsComponent} from './news/news.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {StatusComponent} from './status/status.component';
import {AdminComponent} from './admin/admin.component';
import {BannerHeaderComponent} from './banner-header/banner-header.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {BestBuyComponent} from './best-buy/best-buy.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NavigationComponent} from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookRegistrationComponent,
    BookDetailsComponent,
    NewsComponent,
    HomeComponent,
    StatusComponent,
    AdminComponent,
    BannerHeaderComponent,
    DiscountsComponent,
    BestBuyComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    QuotePipe,
    FormsModule,
    ReactiveFormsModule,
    HighlightDirective,
    ScrollingModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [{
    provide: BookService,
    useClass: BookService
  },
    provideHttpClient(),
    provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
