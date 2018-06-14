import { Injectable } from '@angular/core';
import { Aliment } from './aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  constructor() {
    selectedAliment: Aliment;

}

listeAliment: Aliment[] = [
 {
   'id': 0,
   'name': 'patate',
   'glycemie': '12',
 },
 {
   'id': 1,
   'name': 'patate',
   'glycemie': '12',
 },
 {
   'id': 2,
   'name': 'patate',
   'glycemie': '12',
 },
 {
 'id': 3,
 'name': 'courge',
 'glycemie': '15',
},
{
'id': 4,
'name': 'ananas',
'glycemie': '03',
},
{
'id': 5,
'name': 'patate',
'glycemie': '34',
}
];

}
