import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealsService } from '../meals.service';
import { Meals } from '../meals';

@Component({
  selector: 'app-favorite-meals',
  templateUrl: './favorite-meals.component.html',
  styleUrls: ['./favorite-meals.component.css']
})
export class FavoriteMealsComponent implements OnInit {

  // meals: Meals = {
  //   Name: '',
  //   ChargeGlyMeals: '',
  // };

  constructor(private mealsService: MealsService) { }

  ngOnInit() {

  }

//       create() {
//         this.mealsService.create(this.meals).subscribe( (meals) => {
//           console.log('créé!');
//           this.meals = meals;
//           localStorage.profileId = meals.id;
//         }, (err) => {
//           console.log('error!', err);
//         });
// }

}


