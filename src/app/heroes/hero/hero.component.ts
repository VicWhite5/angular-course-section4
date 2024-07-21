import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public heroName: string = 'Ironman';
  public name: string = 'Tony Stark';
  public age: number = 45;

  get capitalizedName(): string {
    return this.heroName.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  // chageHero(): void {
  //   if (this.heroName === 'Ironman') {
  //     this.heroName = 'Spiderman';
  //     this.name = 'Peter Parker';
  //     return;
  //   }

  //   this.heroName = 'Ironman';
  //   this.name = 'Tony Stark';
  // }

  // chageAge(): void {
  //   if (this.age === 45) {
  //     this.age = 25;
  //     return;
  //   }

  //   this.age = 45;
  // }

  chageHero(): void {
    this.heroName = 'Spiderman';
    this.name = 'Peter Parker';
  }

  chageAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.heroName = 'Ironman';
    this.name = 'Tony Stark';
    this.age = 45;
  }
}
