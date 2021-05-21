import { Component, DoCheck, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, DoCheck {
  tableHeaders: string[];
  dataArray: Data[];


  constructor(
    private dataService: DataService,
    private searchService: SearchService
  ) {
    this.tableHeaders = Object.keys(this.dataService.data[0]);
    // this.dataArray = this.searchService.mutableDataArray;
  }

  ngOnInit(): void {
    this.searchService.getData().subscribe(data => {
      console.log(data);
      this.dataArray = [];
      this.dataArray = data;
    });
  }

  ngDoCheck(): void {
    // this.dataArray = this.searchService.getData();
  }


}
