import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../../core/service/guards/auth.guard";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";

const routes : Routes = [
  {path: "", component: ShopComponent}
]

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxUsefulSwiperModule
  ],
  providers:[AuthGuard]
})
export class ShopModule { }
