import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ActivatedRouteSnapshot, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'books',
    loadChildren: () => import("./book/book.module").then(m => m.BookModule)
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [(route: ActivatedRouteSnapshot) => {
      return route.queryParams['logged'] === 'true';
    }]
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {bindToComponentInputs: true})
  ], exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {
}
