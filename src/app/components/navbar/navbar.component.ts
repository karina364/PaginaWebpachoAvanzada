import { Component, OnInit } from '@angular/core';

declare var funcion3:any;
declare var funcion1:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

  registro(){
    funcion3();
  }
}
