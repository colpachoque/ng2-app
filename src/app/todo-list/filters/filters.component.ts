import { Component, EventEmitter } from '@angular/core';
import {FilterEnum} from "./../filter-enum";

@Component({
  selector: 'filters',
  templateUrl: './filters.html',
  styleUrls: [
    './filters.css'
  ],
  inputs: ['filter'],
  outputs: ['change']
})

export class FiltersComponent {
  filter: FilterEnum;
  FilterEnum: any = FilterEnum;
  change: EventEmitter<FilterEnum> = new EventEmitter<FilterEnum>();
}
