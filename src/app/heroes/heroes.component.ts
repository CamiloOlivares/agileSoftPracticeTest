import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';
import { HEROES } from "../mock-heroes";
import { MessageService } from "../message.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  vuela:string;
  busca:string;
  idBusca:number;
  constructor(private HeroService:HeroService,private messageService:MessageService,private router:Router) { }

  ngOnInit(){
    this.vuela = '';
    this.getHeroes();
  }

  findHero(nombre:string){
    this.idBusca=-1;
    this.heroes.forEach(value=>{if(value.nombre===nombre){
      this.idBusca=value.id;
    }});
    if(this.idBusca===-1){
      this.messageService.add('Ese heroe no existe, intente de nuevo');
    }
    else{
      //this.messageService.add('Heroe encontrado');
      this.router.navigateByUrl('/detail/'+this.idBusca);
    }
    console.log(this.idBusca);
  }

  getHeroes():void{
    this.HeroService.getHeroes(this.vuela).subscribe(heroes=>this.heroes=heroes);
  }


  puedeVolar():void{
    this.vuela = '/?puedeVolar=true';
    this.getHeroes();
  }

  noPuedeVolar():void{
    this.vuela = '/?puedeVolar=false';
    this.getHeroes();
  }

  clear():void{
    this.vuela='';
    this.getHeroes();
  }
}
