import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

declare var funcion1:any;
declare var funcion2:any;


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  posts: any;

  constructor(
    private peticionesService: PeticionesService  
  ) { }

  ngOnInit(): void {
    this.peticionesService.getPosts() 
    .subscribe((posts) => {
      this.posts = posts; 
    });
    }
   
    go() {
    
      funcion1();
        
   
   }
   
   closeModal(){
   
     funcion2();
   }

   
  
  }



