import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const PEOPLE_URL = 'https:/swapi.co/api/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

}
