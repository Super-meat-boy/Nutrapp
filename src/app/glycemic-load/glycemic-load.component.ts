import {Component} from '@angular/core';
import {Aliment} from '../aliment';

@Component({
  selector: 'app-glycemic-load',
  templateUrl: './glycemic-load.component.html',
  styleUrls: ['./glycemic-load.component.css']
})
export class GlycemicLoadComponent {

  //displayedColumns = ['id', 'name', 'glycemie'];
  dataSource = [];
  totalCharge = 0;

  constructor() {
  }

  calculTotalCharge() {
    let totalCharge = 0;
    this.dataSource.forEach(function addNumber(elt: Aliment) {
      totalCharge += elt.charge;
    });
    this.totalCharge = totalCharge;
  }


  resetCharge() {
    this.dataSource = [];
    this.totalCharge = 0;
  }

  ngOnInit() {
  }

  add(alim, ig, grammage) {
    console.log('test', alim);
    this.dataSource.push({id: 7, name: alim, glycemie: ig, grammage: grammage, charge: (grammage * ig) / 100});
    this.calculTotalCharge();
  }

}
