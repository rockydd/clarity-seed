import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ships } from './ships.model';
import { map } from 'rxjs/operators';
const SHIPS_URL = 'https:/swapi.co/api/starships';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private http: HttpClient) { }

  getShips() {
    return this.http.get<Ships>(SHIPS_URL).pipe(map(ships => ships.results));
  }
}
