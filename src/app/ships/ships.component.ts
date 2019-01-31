import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from './ships.model';
import { ShipsService } from './ships.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships$: Observable<Ship[]>;
  loading: Boolean = false;
  constructor(private svc: ShipsService) {

    this.loading = true;
    this.ships$ = this.svc.getShips().pipe( finalize( () => this.loading = false));

  }

  ngOnInit() {
  }

}
