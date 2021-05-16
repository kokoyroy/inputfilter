import { Injectable } from '@angular/core';
import { Data } from '../models/data';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public datamodified: Data[];
  constructor(private dataService: DataService) {
    this.datamodified = [...dataService.data];
  }

  stringToLower(string: string): string {
    return string.toLowerCase();
  }

  search(data: string) {
    //todo
  }
  
  getData(): Data[] {
    return this.datamodified;
  }
}
