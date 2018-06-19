import {Injectable} from '@angular/core';
import {Aliment} from './aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {


  aliment: Aliment[] = [
    {
      'id': 0,
      'name': 'patate',
      'glycemie': 12,
    },
    {
      'id': 1,
      'name': 'celeri',
      'glycemie': 13,
    },
    {
      'id': 2,
      'name': 'pomme',
      'glycemie': 2,
    },
    {
      'id': 3,
      'name': 'courge',
      'glycemie': 15,
    },
    {
      'id': 0,
      'name': 'ananas',
      'glycemie': 3,
    },
    {
      'id': 5,
      'name': 'patate',
      'glycemie': 34,
    }
  ];

  constructor() {
  }

}
