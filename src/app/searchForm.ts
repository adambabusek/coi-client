import { Component, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';
import { Organization } from './organization';

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
  company: Organization;

  constructor(private searchService: SearchService) { }

  submit(): void {
    this.searchService.findInspections(this.searchIco)
                      .then((resp: any) => {                            
                            this.company = new Organization();
                            this.company.ico = this.searchIco;
                            this.company.name="Ajajaj s.r.o.";
                            this.company.place="č.p. 12/A, 100 00 Praha";

                            if (resp && resp.inspections) {                              
                              this.resultCnt = resp.inspections.length;
                            }
                            this.notify.emit(resp);
                            });
  }
}
