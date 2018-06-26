import {Injectable} from '@angular/core';
import {Aliment} from './aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  selectedAliment: Aliment;
  listeAliment: Aliment[] = [
 {
   'id': 0,
   'name': 'patate',
   'proteine': 76,
   'lipide': 32,
   'glucide': 4,
   'glycemie': 12,
   'charge': 0,
 },
 {
   'id': 1,
   'name': 'celeri',
   'proteine': 10,
   'lipide': 65,
   'glucide': 4,
   'glycemie': 13,
   'charge': 0,
 },
 {
   'id': 2,
   'name': 'pomme',
   'glycemie': 2,
   'proteine': 12,
   'lipide': 2,
   'glucide': 4,
   'charge': 3,
 },
 {
 'id': 3,
 'name': 'courge',
 'proteine': 32,
 'lipide': 21,
 'glucide': 4,
 'glycemie': 1,
   'charge': 0,
},
{
'id': 0,
'name': 'ananas',
'proteine': 45,
'lipide': 2,
'glucide': 4,
'glycemie': 3,
  'charge': 0,
},
{
'id': 5,
'name': 'patate',
'proteine': 12,
'lipide': 2,
'glucide': 3,
'glycemie': 34,
  'charge': 0,
}
];

}
