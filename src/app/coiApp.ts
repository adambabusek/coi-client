import { Component } from '@angular/core';
import { SearchForm } from './searchForm';

@Component({
  selector: 'coi-app',
  templateUrl: 'app/html/coiApp.html',
  providers: []
})
export class CoiApp  {

  searchResult: any[];
  
  searchResultNotify(result: any):void {
    this.searchResult = result.inspections;
  }
}
