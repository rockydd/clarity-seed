import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Person } from './people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people$: Observable<Person[]>;
  loading: Boolean = false;
  constructor(private ps: PeopleService) {
    this.loading = true;
    this.people$ = this.ps.getPeople().pipe(
      finalize( () => {
        console.log('loaded');
        this.loading = false;
      }
      ));
  }

  ngOnInit() {
  }

}
