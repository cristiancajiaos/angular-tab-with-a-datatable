import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { DatatableComponent } from './shared/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
