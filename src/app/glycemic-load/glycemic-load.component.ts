import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glycemic-load',
  templateUrl: './glycemic-load.component.html',
  styleUrls: ['./glycemic-load.component.css']
})
export class GlycemicLoadComponent implements OnInit {

  constructor() { }

  //displayedColumns = ['id', 'name', 'glycemie'];
  dataSource = [];


  ngOnInit() {
  }
 add(alim, ig , grammage) {
   console.log ('test', alim);
this.dataSource.push({id: 7, name: alim , glycemie: ig , grammage: grammage , charge: (grammage * ig) / 100 });
 }
}
