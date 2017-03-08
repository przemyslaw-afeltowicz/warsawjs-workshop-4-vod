import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MovieService} from "../../movie.service";
import {BehaviorSubject} from "rxjs";
import {MovieModel} from "../../movie-model";

@Component({
  selector: 'app-movies-list',
  templateUrl: 'movies-list.component.html',
  styleUrls: ['movies-list.component.css'],
  providers: [MovieService]
})
export class MoviesListComponent implements OnInit {

  @Input() items: {}[];
  @Input() filters: any;
  @Output() removeEvent: EventEmitter<any>;

  constructor() {
    this.removeEvent = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.filters);
  }

  removeItem({$key}){
    console.log($key);
    this.removeEvent.emit($key);
  }

}
