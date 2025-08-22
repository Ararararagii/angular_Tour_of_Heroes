import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';


@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})

//export class Heroes {
//  hero: Hero = {
//    id: 1,
//    name: 'Hayashi'
//  };
//}

export class Heroes implements OnInit {
  heroes : Hero[] = [];

  constructor(private heroService: HeroService) {}

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}

