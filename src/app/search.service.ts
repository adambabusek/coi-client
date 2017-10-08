import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
	searchUrl: string = "http://localhost:8080/coi-rest/api/inspection/";

	constructor(private http: Http) { }

	findInspections(ico: string): Promise<any> {
		return this.http
				.get(this.searchUrl + ico)
				.toPromise().then((resp: Response) => {return resp.json();});
	}
}