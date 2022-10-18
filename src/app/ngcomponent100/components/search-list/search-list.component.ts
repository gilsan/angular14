import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {

  @Input() items: string[] = [];
  searchTerm = '';
  hasBeenSelected = false;

  updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  selectSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }

}
