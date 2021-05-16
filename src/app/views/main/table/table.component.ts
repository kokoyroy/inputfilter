import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableHeaders: string[];
  dataArray: Data[];
  constructor(
    private data: DataService,
    private searchService:SearchService
    ) {
    this.tableHeaders = Object.keys(data.data[0]);
    this.dataArray = searchService.getData();
  }

  ngOnInit(): void {
  }

}
