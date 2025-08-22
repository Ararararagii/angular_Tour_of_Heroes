import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-hero-detail',
  standalone: false,
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
})

export class HeroDetail implements OnInit{
  hero : Hero|undefined;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack():void{
    this.location.back();
  }
}
