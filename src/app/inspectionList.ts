import { Component, Input } from '@angular/core';

@Component({
  selector: 'inspection-list',
  templateUrl: 'app/html/inspectionList.html',
  providers: []
})
export class InspectionList  {
  
  @Input()
  inspections: any[];
  
  inspectionSelected(inspection: any) {
    console.log(inspection);
  }
}
