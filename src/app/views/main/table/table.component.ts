import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableHeaders: string[];
  dataArray: Data[];
  constructor(private data: DataService) {
    this.tableHeaders = Object.keys(data.data[0]);
    this.dataArray = [...this.data.data];
  }

  ngOnInit(): void {
  }

}
