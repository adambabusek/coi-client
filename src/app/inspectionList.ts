import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inspection-list',
  templateUrl: 'app/html/inspectionList.html',
  providers: []
})
export class InspectionList  {
  @Output() 
  notifyInspectionSelected : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  inspections: any[];
  
  inspectionSelected(inspection: any) {
    this.notifyInspectionSelected.emit(inspection);
  }
}
