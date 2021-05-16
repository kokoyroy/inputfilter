import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }
  onChange(searchString: string): void {
    if (searchString.length > 3) {
      this.searchService.search(searchString);
    } else {
      this.searchService.reset();
    }
  }
}
