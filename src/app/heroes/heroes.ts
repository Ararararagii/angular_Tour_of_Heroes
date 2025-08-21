import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero-service';
import { AppRoutingModule } from "../app-routing-module";


@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
  imports: [FormsModule, AppRoutingModule]
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

