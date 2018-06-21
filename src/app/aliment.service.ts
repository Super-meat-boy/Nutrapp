import {Injectable} from '@angular/core';
import {Aliment} from './aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {


  listeAliment: Aliment[] = [
 {
   'id': 0,
   'name': 'patate',
   'glycemie': 12,
   'charge': 0,
 },
 {
   'id': 1,
   'name': 'celeri',
   'glycemie': 13,
   'charge': 0,
 },
 {
   'id': 2,
   'name': 'pomme',
   'glycemie': 24,
   'charge': 0,
 },
 {
 'id': 3,
 'name': 'courge',
 'glycemie': 15,
   'charge': 0,
},
{
'id': 0,
'name': 'ananas',
'glycemie': 3,
  'charge': 0,
},
{
'id': 5,
'name': 'banane',
'glycemie': 34,
  'charge': 0,
}
];

  constructor() {
  }

}
