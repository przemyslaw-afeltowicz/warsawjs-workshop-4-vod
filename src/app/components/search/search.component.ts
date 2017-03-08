import {Component, OnInit, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MovieModel} from "../../movie-model";

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() options: {}[];
  @Input() filters: BehaviorSubject<MovieModel>;

  constructor() { }

  ngOnInit() {
  }

  updateFilters({value}){
    this.filters.next(Object.assign({}, this.filters.value, {name: value}));
  }

}
