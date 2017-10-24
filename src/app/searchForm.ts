import { Component, Output, EventEmitter } from '@angular/core';
import { SearchService } from './search.service';
import { Organization } from './organization';
import { UserError } from './userError';

@Component({
    selector: 'search-form',
    templateUrl: 'app/html/searchForm.html',
    providers: [SearchService]
})
export class SearchForm {
    @Output()
    notify: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    notifyError: EventEmitter<UserError> = new EventEmitter<UserError>();

    searchIco: string;
    resultCnt: number;
    company: Organization;
    userError: UserError;

    constructor(private searchService: SearchService) { }

    submit(): void {
        this.resetFormValues();
        this.searchService.findInspections(this.searchIco)
            .then((resp: any) => {
                if (!resp) {
                    console.log("Response is empty!");
                    return;
                }

                if (resp.success === true) {
                    this.handleSuccess(resp);
                } else if (resp.success === false) {
                    this.handleError(resp);
                }
            });
    }

    resetFormValues(): void {
        this.company = null;
        this.userError = null;
        this.resultCnt = 0;
    }

    handleSuccess(resp: any): void {
        if (resp.organization) {
            this.company = new Organization();
            this.company.ico = resp.organization.ICO;
            this.company.name = resp.organization.name;
            this.company.place = resp.organization.place;
        }

        if (resp.inspections) {
            this.resultCnt = resp.inspections.length;
        }
        this.notify.emit(resp);
    }

    handleError(resp: any): void {
        if (resp.error) {
            let err = new UserError();
            err.type = resp.error.errorType;
            err.searchError = err.type === "EMPTY_ICO" || err.type === "INVALID_ICO";
            err.userMsg = resp.error.userMsg;
            
            if (err.searchError) {
                this.userError = err;
            } else {
                this.notifyError.emit(err);
            }
        }
    } 
}
