import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Aliment } from '../aliment';
import {AlimentService} from '../aliment.service';

@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.css'],
})
export class ListAlimentComponent implements OnInit {

  //ListAlimentComponent Aliment;

  aliments = this.alimentService.listeAliment;
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;

  separatorKeysCodes = [ENTER, COMMA];

  alimentCtrl = new FormControl();

  filteredAliment: Observable<Aliment[]>;



  @ViewChild('alimentInput') alimentInput: ElementRef;

  constructor(public alimentService: AlimentService ) {

 //this.alimentService.selectedAliment = this.alimentService.listeAliment[0];
    this.filteredAliment = this.alimentCtrl.valueChanges.pipe(
        startWith(null),
        map((aliment) => (aliment && (typeof aliment === "object")) ? aliment.name : aliment),
        map((alimentName) => (alimentName) ? this.filter(alimentName) : this.aliments.slice())

      );
  }

  filter(alimentName: string) {
    console.log(this.aliments);
    return this.aliments.filter(aliment =>
        aliment.name.toLowerCase().indexOf(alimentName.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
  //  this.selectedAliments.push(event.option.viewValue);
    //console.log(this.selectedAliments);
    this.alimentInput.nativeElement.value = '';
    this.alimentCtrl.setValue(null);
  }
  ngOnInit() {
  }
}
