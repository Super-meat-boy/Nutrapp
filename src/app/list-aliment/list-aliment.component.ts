import {Component, OnInit} from '@angular/core';
import {AlimentService} from '../aliment.service';
import {Aliment} from '../aliment';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.css'],
})
export class ListAlimentComponent implements OnInit {
  //aliments: Observable<Aliment[]> = this.alimentService.getAll();
  myControl = new FormControl();
  options: Aliment[] = [
    // {id: 1, name: 'Tomate', glycemie: 11, glucide: 1, charge: 11, lipide: 12, proteine: 11},
    // {id: 2, name: 'Fenouille', glycemie: 11, glucide: 1, charge: 11, lipide: 12, proteine: 11},
    // {id: 3, name: 'Potate', glycemie: 11, glucide: 1, charge: 11, lipide: 12, proteine: 11},
    // {id: 4, name: 'Haricot', glycemie: 11, glucide: 1, charge: 11, lipide: 12, proteine: 11},

  ];
  filteredOptions: Observable<Aliment[]>;



  constructor(private alimentService: AlimentService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.alimentService.getAll().subscribe((list) => {
      console.log(list);
      this.options = list;
    });
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | Aliment>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(aliment ?: Aliment): string | undefined {
    return aliment ? aliment.name : undefined;
  }

  private _filter(name: string): Aliment[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
