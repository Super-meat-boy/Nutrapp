import {Component, OnInit} from '@angular/core';
import {Aliment} from '../aliment';
import {Observable} from 'rxjs';
import {AlimentService} from '../aliment.service';
import {map, startWith, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {MealsService} from '../meals.service';
import {Meals} from '../meals';

@Component({
  selector: 'app-glycemic-load',
  templateUrl: './glycemic-load.component.html',
  styleUrls: ['./glycemic-load.component.css']
})
export class GlycemicLoadComponent implements OnInit {

  // displayedColumns = ['id', 'name', 'glycemie'];
  dataSource = [];
  totalCharge = 0;
  selectedAliment: Aliment | string = {id: null, name: '', grammage: 0, chargeGly: 0};
  filteredOptions: Observable<Aliment[]>;
  myControl = new FormControl();
  options: Aliment[] = [];
  errormessage = '';
  errormessageMenu = '';


  meal: Meals = {id: null, menuComposition: [], chargeGlyMeals: 0, name: ''};


  constructor(private alimentService: AlimentService, private mealsService: MealsService) {
  }

  ngOnInit() {
    this.refresh();
  }

  calculTotalCharge() {
    let totalCharge = 0;
    this.dataSource.forEach(function addNumber(elt: Aliment) {
      totalCharge += elt.chargeGly;
    });
    this.totalCharge = totalCharge;
  }


  resetCharge() {
    this.dataSource = [];
    console.log('resetCharge - Cleaning dataSource');
    this.totalCharge = 0;
    this.errormessage = '';
    this.selectedAliment = {id: null, name: '', grammage: 0, chargeGly: 0};
    this.meal.name = '';
  }

  refresh() {
    this.alimentService.getAll().subscribe((list) => {
      console.log(list);
      this.options = list;
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Aliment>(''),
        tap(value => {
          if (typeof value !== 'string') {
            this.selectedAliment = value;
          }
          // this.selectedAliment = value;
          console.log('this selected aliment', this.selectedAliment);
        }),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice()),
      );
  }

  add(idAliment: number, alim: string, ig: number, grammage: number) {
    console.log(grammage);
    console.log(alim);
    if (ig !== 0 && grammage !== undefined) {
      this.dataSource.push({id: idAliment, name: alim, glycemie: ig, grammage: grammage, chargeGly: (grammage * ig) / 100});
      this.selectedAliment = {id: undefined, name: '', grammage: 0, chargeGly: 0};
      this.calculTotalCharge();
      this.errormessage = '';
      this.errormessageMenu = '';
      console.log(this.dataSource);
    } else {
      this.errormessage = '********* Thanks for completing the fields *********';
    }

  }

  displayFn(aliment ?: Aliment): string | undefined {
    return aliment ? aliment.name : undefined;
  }

  // Méthode de création du menu
  create(name: string, menuComposition: Aliment[], chargeGlyMeals: number) {
    if (this.dataSource.length > 0) {
      if (name !== '') {
        console.log('toto');
        console.log(this.meal);
        const localMeal: Meals = {id: null, name: this.meal.name, menuComposition: this.dataSource, chargeGlyMeals: this.totalCharge};
        console.log(localMeal);
        this.mealsService.create(localMeal).subscribe((meals) => {
          console.log('créé!');
          localStorage.profileId = meals.id;
          this.resetCharge();
        }, (err) => {
          console.log('error!', err);
        });
      } else {
        this.errormessageMenu = '********* Thanks for giving a name to your menu *********';
      }
    } else {
      this.errormessageMenu = '********* Thanks for adding aliment *********';
    }
  }

  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
