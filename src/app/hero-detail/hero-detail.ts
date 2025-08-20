import { Component, Input } from '@angular/core';
import { Hero } from '../hero'
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
    imports: [ UpperCasePipe, FormsModule]
})

export class HeroDetail {
  @Input() hero?: Hero;
}
