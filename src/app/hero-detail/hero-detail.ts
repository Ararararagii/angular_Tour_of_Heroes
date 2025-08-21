import { Component, Input } from '@angular/core';
import { Hero } from '../hero'
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero-service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
    imports: [ UpperCasePipe, FormsModule]
})

export class HeroDetail {
  hero : Hero|undefined;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}


  ngInInit(): void {
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
