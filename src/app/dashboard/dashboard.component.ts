import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = this.orderBuildingsByCost(heroes).slice(0, 4));
  }

  orderBuildingsByCost(heroes: Hero[]): Hero[] {
    return heroes.sort((a, b) => b.cost > a.cost ? 1 : -1)
  }

  formatCurrency(cost: number = 0): string {
    return this.heroService.formatCurrency(cost);
  }

  formatCostPerSqFt(totalCost : number = 0, area: number = 0): string {
    return this.heroService.formatCurrency(this.heroService.calculateCostPerSqft(totalCost, area))
  }
}
