import {Component, inject, OnInit, ViewContainerRef} from '@angular/core';
import {interval, map} from "rxjs";
import {DiscountsComponent} from "../discounts/discounts.component";
import {BestBuyComponent} from "../best-buy/best-buy.component";

@Component({
  selector: 'app-banner-header',
  templateUrl: './banner-header.component.html',
  styleUrl: './banner-header.component.css'
})
export class BannerHeaderComponent implements OnInit {

  private readonly viewContainerRef = inject(ViewContainerRef);

  private readonly components = [DiscountsComponent, BestBuyComponent];

  ngOnInit() {
    interval(1000).pipe(map(i => Math.floor(Math.random() * 10) % 2),
      map(i => this.components[i]))
      .subscribe(res => this.renderComponent(res));
  }

  private renderComponent(comp: any): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(comp);
  }

}
