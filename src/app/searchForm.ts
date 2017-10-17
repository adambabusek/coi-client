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
    this.company = null;
    this.searchService.findInspections(this.searchIco)
                      .then((resp: any) => {                            
                            if (!resp) {
                              return;
                            }

                            if (resp.organization) {
                              this.company = new Organization();
                              this.company.ico = resp.organization.ico;
                              this.company.name = resp.organization.name;
                              this.company.place = resp.organization.place;
                            }

                            if (resp.inspections) {                              
                              this.resultCnt = resp.inspections.length;
                            }
                            this.notify.emit(resp);
                            });
  }
}
