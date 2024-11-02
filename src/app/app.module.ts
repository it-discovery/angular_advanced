import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {provideHttpClient} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './home/home.component';
import {StatusComponent} from './status/status.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {NavigationComponent} from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {BookModule} from "./book/book.module";
import {NewsModule} from "./news/news.module";
import {AdminModule} from "./admin/admin.module";
import {AdModule} from "./ad/ad.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    SharedModule,
    CoreModule,
    BookModule,
    NewsModule,
    AdminModule,
    AdModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
