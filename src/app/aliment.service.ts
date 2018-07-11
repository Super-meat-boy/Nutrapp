import {Injectable} from '@angular/core';
import {Aliment} from './aliment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  selectedAliment: Aliment;

  /*  listeAliment: Aliment[] = [
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
  ];*/

//   private restUrl = 'http://localhost:8090/aliments';
//
//   constructor(private http: HttpClient) {
//
//   }
//
//   public displayAliment(): Observable<Aliment> {
//     return this.http.put<Aliment>(this.restUrl, httpOptions);
//   }
//
// }


  API_URL = 'http://localhost:8090/aliments'; // je mets l'url qui correspond au local host 8090/aliment

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Aliment[]> {
    return this.http.get<Aliment[]>(this.API_URL);
  }

}
