import {Component} from '@angular/core';

@Component({
  selector: 'app-history-meals',
  templateUrl: './history-meals.component.html',
  styleUrls: ['./history-meals.component.css']
})
export class HistoryMealsComponent {

  displayedColumns = ['date', 'meal', 'menu', 'charge'];
    dataSource = ELEMENT_DATA;
  }

  export interface PeriodicElement {

    date: string;
    meal: string;
    menu: string;
    charge: number;

  }


  const ELEMENT_DATA: PeriodicElement[] = [
    {date: '01 juillet 2018', meal: 'matin', menu: 'Un yaourt nature', charge: 12},
    {date: '01 juillet 2018', meal: 'dejeuner', menu: 'Melon, Une omelette avec 3 oeufs, Une biscotte, Un yaourt nature', charge: 4},
    {date: '01 juillet 2018', meal: 'diner', menu: 'soupe de potiron, Une biscotte, Un yaourt nature', charge: 34},
    {date: '02 juillet 2018', meal: 'matin', menu: 'Un yaourt nature', charge: 12},
    {
      date: '02 juillet 2018',
      meal: 'dejeuner',
      menu: 'Une tranche de jambon blanc, Une cuisse de poulet, Une salade de laitue, Une banane',
      charge: 45
    },
    {date: '02 juillet 2018', meal: 'encas', menu: 'Une pomme', charge: 2},
    {date: '02 juillet 2018', meal: 'diner', menu: 'soupe de poisson, Une biscotte, 300G de gruyere', charge: 28},
    {date: '03 juillet 2018', meal: 'matin', menu: 'Un yaourt nature', charge: 12},
    {
      date: '03 juillet 2018',
      meal: 'dejeuner',
      menu: 'Une salade avec 2 tomates, 300gr de lentilles, Une viande rouge, Un yaourt nature',
      charge: 63
    },
    {date: '03 juillet 2018', meal: 'encas', menu: 'Une banane', charge: 4},
    {date: '03 juillet 2018', meal: 'diner', menu: 'salade avec 3 tomate, 1 oeuf, 300G de gruyere', charge: 21},

  ];
