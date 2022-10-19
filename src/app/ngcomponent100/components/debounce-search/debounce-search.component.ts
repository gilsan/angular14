import { Component, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';


@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent {
  @Input() searchTerm = '';
  @Input() placeholder ='검색';
  @Output() searchUpdate = new EventEmitter<string>()

  searchUpdate$ = new Subject<string>();

  constructor() {
     this.searchUpdate$.pipe(
      debounceTime(250),
      distinctUntilChanged(),

     ).subscribe(value => {
       this.searchUpdate.emit(value);
     })
  }

  updatedSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }







}
