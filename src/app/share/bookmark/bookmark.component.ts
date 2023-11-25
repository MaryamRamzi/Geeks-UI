import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit, AfterViewInit  {

  show:boolean=false;
  showTooltip:boolean=false;

  constructor() {}
  
  ngOnInit(): void {
  }

  ngAfterViewInit() {
  feather.replace();
}

 booked(){
   this.show = !this.show
 }
    //  myFunction(x:any) {
    //     x.classList.add("icon-fill ");
    // }
 tip(sh:boolean){
   this.showTooltip=sh
 }
}
