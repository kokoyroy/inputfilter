import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { Data } from '../models/data';
import { DataService } from './data.service';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public mutableDataArray: Data[];

  emitNewData: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private dataService: DataService) {
    this.mutableDataArray = [...dataService.data];
  }


  search(searchString: string): void {
    this.emitNewData.next(searchString);
    // this.modifyArray(searchString.toLowerCase());
  }


  getData(): Observable<Data[]> {
    const data$ =  of(this.mutableDataArray);
    return combineLatest([data$, this.emitNewData]).pipe(
      switchMap(([data, searchTerm]) => {
        if (!searchTerm) {
          return of(data);
        }
        console.log('afs');
        data = data.filter(dataobject => dataobject.Firstname.includes(searchTerm));
        return of(data);
      })
    )
  }

  modifyArray(searchString: string): void {
    this.mutableDataArray = this.mutableDataArray.filter(dataobject => dataobject.Firstname.includes(searchString));
    console.log(this.mutableDataArray);

  }

  reset(): void {
    this.mutableDataArray = [...this.dataService.data];
  }
}
