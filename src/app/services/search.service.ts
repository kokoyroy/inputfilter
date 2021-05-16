import { Injectable } from '@angular/core';
import { Data } from '../models/data';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public mutableDataArray: Data[];

  constructor(private dataService: DataService) {
    this.mutableDataArray = [...dataService.data];
  }


  search(searchString: string): void {
    this.modifyArray(searchString.toLowerCase());
  }


  getData(): Data[] {
    return this.mutableDataArray;
  }

  modifyArray(searchString: string): void {
    this.mutableDataArray = this.mutableDataArray.filter(dataobject => dataobject.Firstname.includes(searchString));
    console.log(this.mutableDataArray);

  }

  reset(): void {
    this.mutableDataArray = [...this.dataService.data];
  }
}
