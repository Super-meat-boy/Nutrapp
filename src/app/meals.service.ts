import {Injectable} from '@angular/core';
import {Meals} from './meals';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  selectedMeals: Meals;

  API_URL = '/menu';

  constructor(private http: HttpClient) {
  }

  create(meals: Meals): Observable<Meals> {
    return this.http.post<Meals>(this.API_URL, meals);
  }

  displayMenus(): Observable<Meals[]> {
    return this.http.get<Meals[]>(this.API_URL);
  }
}
