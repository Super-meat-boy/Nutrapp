import {Component, OnInit} from '@angular/core';
import {Aliment} from '../aliment';
import {Observable} from 'rxjs';
import {AlimentService} from '../aliment.service';
import {map, startWith, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import { MealsService } from '../meals.service';
import { Meals } from '../meals';

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
  errormessage: string = '';

  meal: Meals = {id: null, listeAliment: [], chargeGlyMeals: 0};



  // alimTest: Aliment = {id: null, name: '', grammage: 0, chargeGly: 0};

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
    this.totalCharge = 0;
    this.errormessage = '';
    this.selectedAliment = {id: null, name: '', grammage: 0, chargeGly: 0};
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

  add(alim, ig, grammage) {
    console.log('add');
    console.log(alim);
    if (alim, ig, grammage) {
      this.dataSource.push({id: 7, name: alim, glycemie: ig, grammage: grammage, chargeGly: (grammage * ig) / 100});
      this.selectedAliment = {id: null, name: '', grammage: 0, chargeGly: 0};
      this.calculTotalCharge();
      this.errormessage = '';
    } else {
      this.errormessage = '********* Thanks for completing the fields *********';
    }

  }

  displayFn(aliment ?: Aliment): string | undefined {
    return aliment ? aliment.name : undefined;
  }

  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  create() {
    this.meal.listeAliment = this.dataSource;
    this.meal.chargeGlyMeals = this.totalCharge;
    this.mealsService.create(this.meal).subscribe( (meals) => {
      console.log('créé!');
      this.meal = meals;
      localStorage.profileId = meals.id;
    }, (err) => {
      console.log('error!', err);
    });
  }

}
