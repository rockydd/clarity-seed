import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from './ships.model';
import { ShipsService } from './ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships$: Observable<Ship[]>;
  constructor(private svc: ShipsService) {

    this.ships$ = this.svc.getShips();

  }

  ngOnInit() {
  }

}
