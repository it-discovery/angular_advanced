import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerHeaderComponent} from "./banner-header/banner-header.component";
import {DiscountsComponent} from "./discounts/discounts.component";
import {BestBuyComponent} from "./best-buy/best-buy.component";


@NgModule({
  declarations: [BannerHeaderComponent, DiscountsComponent, BestBuyComponent],
  imports: [
    CommonModule
  ],
  exports: [BannerHeaderComponent]
})
export class AdModule {
}
