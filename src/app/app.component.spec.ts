import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {StatusComponent} from "./status/status.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {NotificationService} from "./core/notification.service";
import {provideHttpClient} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {BookModule} from "./book/book.module";
import {NewsModule} from "./news/news.module";
import {AdminModule} from "./admin/admin.module";
import {AdModule} from "./ad/ad.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideRouter, RouterModule} from "@angular/router";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, StatusComponent, NavigationComponent],
      imports: [MatToolbarModule,
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
        BrowserAnimationsModule,
        RouterModule,
        AdModule],
      providers: [NotificationService, provideHttpClient(), provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have the 'Shop' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Shop');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Shop');
  // });
});
