import { Component, Input } from '@angular/core';

@Component({
  selector: 'inspection-detail',
  templateUrl: 'app/html/inspectionDetail.html',
  providers: []
})
export class InspectionDetail  {
	
  @Input()
  inspection: any;
  
}
