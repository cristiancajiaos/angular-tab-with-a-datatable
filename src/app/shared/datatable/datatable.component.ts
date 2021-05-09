import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false }) dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<unknown> = new Subject();

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      ajax: 'assets/data/data.json',
      columns: [
        {
          title: 'ID',
          data: 'id'
        },
        {
          title: 'First Name',
          data: 'firstName'
        },
        {
          title: 'Last name',
          data: 'lastName'
        }
      ]
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
}
