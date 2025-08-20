import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroDetail } from '../hero-detail/hero-detail';
import { HeroService } from '../hero-service';
import { MessageService } from '../message-service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
  imports: [ FormsModule, HeroDetail]
})

//export class Heroes {
//  hero: Hero = {
//    id: 1,
//    name: 'Hayashi'
//  };
//}

export class Heroes implements OnInit {
  heroes : Hero[] = [];

  constructor(private heroService: HeroService, private messageService:MessageService) {}

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }



  onSelect(hero: Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}

