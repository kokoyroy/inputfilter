import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  stringToLower(string: string): string {
    return string.toLowerCase();
  }

  search(data: string) {

  }
}
