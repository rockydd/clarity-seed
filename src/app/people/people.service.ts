import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './people.model';
import { map } from 'rxjs/operators';
const PEOPLE_URL = 'https:/swapi.co/api/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<People>(PEOPLE_URL).pipe(map(people => people.results));
  }
}
