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

  API_URL = '/aliments'; // je mets l'url qui correspond au local host 8090/aliment

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Aliment[]> {
    console.log('getAll apiURL', this.API_URL );
    return this.http.get<Aliment[]>(this.API_URL);
  }

}
