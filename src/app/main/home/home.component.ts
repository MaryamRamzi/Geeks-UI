import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {


  constructor(private router: Router){} 

  ngAfterViewInit() {
    feather.replace();
  }
  
  ngOnInit(): void {
  }
}
