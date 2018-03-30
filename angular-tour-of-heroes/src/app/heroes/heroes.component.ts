import {Component, OnInit, OnDestroy} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  heroes: Hero[];


  constructor(private heroService: HeroService) {
  }

  onClick(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnDestroy() {
    this.heroes = undefined;
  }

}
