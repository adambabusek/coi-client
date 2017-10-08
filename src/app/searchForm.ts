import { Component, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'search-form',
  templateUrl: 'app/html/searchForm.html',
  providers: [SearchService]
})
export class SearchForm  {
  @Output() notify : EventEmitter<any> = new EventEmitter<any>();
  searchIco: string;

  constructor(private searchService: SearchService) { }

  submit(): void {
    this.searchService.findInspections(this.searchIco)
                      .then(resp => this.notify.emit(resp));
  }
}
