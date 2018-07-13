import { Injectable } from '@angular/core';
import { Meals } from './meals';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

selectedMeals: Meals;

  API_URL = 'http://localhost:8090/menu';
  constructor(private http: HttpClient) { }

  create(meals: Meals): Observable<Meals> {
    return this.http.post<Meals>(this.API_URL, meals);
  }
}
