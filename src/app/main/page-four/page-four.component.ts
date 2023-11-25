import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent implements OnInit {

  showTooltip:boolean

  constructor() {

    this.showTooltip= false;
    
   }
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

  
  ngOnInit(): void {
  }

}
