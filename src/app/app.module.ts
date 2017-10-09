import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { CoiApp } from './coiApp';
import { SearchForm }  from './searchForm';
import { InspectionList }  from './inspectionList';
import { InspectionDetail }  from './inspectionDetail';

@NgModule({
  imports:      [ BrowserModule,
                  HttpClientModule,
                  HttpModule,
                  FormsModule ],
  declarations: [ CoiApp, SearchForm, InspectionList, InspectionDetail ],
  bootstrap:    [ CoiApp ]
})
export class AppModule { }
