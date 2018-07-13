import {Component, OnInit} from '@angular/core';
import {Aliment} from '../aliment';
import {Observable} from 'rxjs';
import {AlimentService} from '../aliment.service';
import {map, startWith, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-glycemic-load',
  templateUrl: './glycemic-load.component.html',
  styleUrls: ['./glycemic-load.component.css']
})
export class GlycemicLoadComponent implements OnInit {

  //displayedColumns = ['id', 'name', 'glycemie'];
  dataSource = [];
  totalCharge = 0;
  selectedAliment: Aliment | string = {id: null, name: '', grammage: 0, chargeGly: 0};
  filteredOptions: Observable<Aliment[]>;
  myControl = new FormControl();
  options: Aliment[] = [];

  //alimTest: Aliment = {id: null, name: '', grammage: 0, chargeGly: 0};

  constructor(private alimentService: AlimentService) {
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
          //this.selectedAliment = value;
          console.log('this selected aliment', this.selectedAliment);
        }),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice()),
      );
  }
  add(alim, ig, grammage) {
    console.log('test', alim);
    this.dataSource.push({id: 7, name: alim, glycemie: ig, grammage: grammage, chargeGly: (grammage * ig) / 100});
    this.calculTotalCharge();
  }

  displayFn(aliment ?: Aliment): string | undefined {
    return aliment ? aliment.name : undefined;
  }

  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
