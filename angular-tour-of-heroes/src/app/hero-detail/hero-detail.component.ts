import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()
  selectedHero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
    console.log('this.route', route);
  }

  ngOnInit() {
     var idCurrent = this.route.snapshot.params;
    console.log('id', idCurrent);
    this.selectedHero = this.heroService.getHero(idCurrent).subscribe();

  }

}
