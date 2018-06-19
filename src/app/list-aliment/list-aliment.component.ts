import {Component, OnInit} from '@angular/core';
import {AlimentService} from '../aliment.service';
import {FormControl} from '@angular/forms';
import {Aliment} from '../aliment';

@Component({
  selector: 'app-list-aliment',
  templateUrl: './list-aliment.component.html',
  styleUrls: ['./list-aliment.component.css'],
})
export class ListAlimentComponent implements OnInit {
  formulaire: FormControl = new FormControl();

  selectedAliment: Aliment;
  selectedName: string;

  constructor(public alimentService: AlimentService) {
  }

  ngOnInit() {
  }
}







