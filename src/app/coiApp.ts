import { Component } from '@angular/core';
import { SearchForm } from './searchForm';
import { UserError } from './userError';

@Component({
    selector: 'coi-app',
    templateUrl: 'app/html/coiApp.html',
    providers: []
})
export class CoiApp {

    searchResult: any[];
    detailItem: any;
    userError: UserError;

    searchResultNotify(result: any): void {
        this.searchResult = result.inspections;
        this.detailItem = null;
    }

    userErrorNotify(err: UserError): void {
        this.userError = err;
        console.log(err);
    }

    inspectionSelected(inspection: any): void {
        this.detailItem = inspection;
    }
}
