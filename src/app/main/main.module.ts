import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import { HomeComponent } from './home/home.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTowComponent } from './page-tow/page-tow.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PagefiveComponent } from './pagefive/pagefive.component';
import { BookmarkComponent } from '../share/bookmark/bookmark.component';
import { SwiperComponent } from '../share/swiper/swiper.component';
import { ListCardComponent } from '../share/list-card/list-card.component';
@NgModule({
  declarations: [
    HomeComponent,
    PageOneComponent,
    PageTowComponent,
    PageThreeComponent,
    PageFourComponent,
    PagefiveComponent,
    BookmarkComponent,
    SwiperComponent,
    ListCardComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxUsefulSwiperModule
  ]
})
export class MainModule { }
