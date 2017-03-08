import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  access: boolean = false;

  constructor() { }

  toggle({checked}){
    this.access = checked;
  }

  ngOnInit() {
  }

}
