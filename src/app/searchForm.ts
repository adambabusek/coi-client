import { Component, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'search-form',
  templateUrl: 'app/html/searchForm.html',
  providers: [SearchService]
})
export class SearchForm  {
  @Output()
  notify : EventEmitter<any> = new EventEmitter<any>();
  searchIco: string;
  resultCnt: number;

  constructor(private searchService: SearchService) { }

  submit(): void {
    this.searchService.findInspections(this.searchIco)
                      .then((resp: any) => {
                            if (resp && resp.inspections) {                              
                              this.resultCnt = resp.inspections.length;
                            }
                            this.notify.emit(resp);
                            });
  }
}
