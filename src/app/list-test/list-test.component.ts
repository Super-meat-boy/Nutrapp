import {Component, OnInit} from '@angular/core';
import {AlimentService} from '../aliment.service';
import {Aliment} from '../aliment';

@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
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
