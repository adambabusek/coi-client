import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
	searchInspectionUrl: string = "http://localhost:8080/coi-rest/api/inspection/";
	searchOrganizationUrl: string ="https://or.justice.cz/ias/ui/rejstrik-$firma?p%3A%3Asubmit=x&.%2Frejstrik-%24&typHledani=STARTS_WITH&jenPlatne=VSECHNY&ico=";

	constructor(private http: Http) { }

	findInspections(ico: string): Promise<any> {
		return this.http
				.get(this.searchInspectionUrl + ico)
				.toPromise().then((resp: Response) => {return resp.json();});
	}
}