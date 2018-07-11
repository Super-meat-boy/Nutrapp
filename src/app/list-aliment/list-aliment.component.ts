import {Component, OnInit} from '@angular/core';
import {AlimentService} from '../aliment.service';
import {Aliment} from '../aliment';


@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.css'],
})
export class ListAlimentComponent implements OnInit {
  aliments: Aliment[] = [];


  constructor(private alimentService: AlimentService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.alimentService.getAll().subscribe((list) => {
      console.log(list);
      this.aliments = list;
    });
  }
}
