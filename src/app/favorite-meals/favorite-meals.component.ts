import {Component, OnInit} from '@angular/core';
import {MealsService} from '../meals.service';
import {Meals} from '../meals';

@Component({
  selector: 'app-favorite-meals',
  templateUrl: './favorite-meals.component.html',
  styleUrls: ['./favorite-meals.component.css']
})
export class FavoriteMealsComponent implements OnInit {

  favMeals: Meals [];

  constructor(private mealsService: MealsService) { }

  ngOnInit() {
    this.displayMenus();

  }

  displayMenus() {
    this.mealsService.displayMenus().subscribe((favMeals: Meals[]) => {
      this.favMeals = favMeals;

    });
  }
}

