import {  AfterViewInit,Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";
import * as feather from 'feather-icons';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit, AfterViewInit {

  constructor() { }
  config: SwiperOptions = {
    breakpoints:{
      '576': {
        slidesPerView: 1,
        spaceBetween: 15
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20
      },
       '992': {
        slidesPerView: 4,
        spaceBetween: 10
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 20
      }
    
    },
    loop:true,
    autoHeight:true,
    autoplay:{ delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };

  toolTip:boolean=false;

  ngOnInit(): void {
  }

  tooltip(sh:boolean){
    this.toolTip=sh
  }

    ngAfterViewInit() {
    feather.replace();
  }
}
