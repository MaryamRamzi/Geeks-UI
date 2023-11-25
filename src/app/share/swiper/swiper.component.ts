import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, AfterViewInit  {

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
    // autoplay:{ delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
    },
    spaceBetween: 30
  };
  ngAfterViewInit() {
    feather.replace();
  }
  ngOnInit(): void {
  }

}
