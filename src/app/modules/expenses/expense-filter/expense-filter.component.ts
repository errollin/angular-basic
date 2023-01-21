import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DUMMY_YEAR_OPTIONS } from '../../../data';
import { Item } from '../../../models';

@Component({
  selector: 'app-expense-filter',
  templateUrl: './expense-filter.component.html',
  styleUrls: ['./expense-filter.component.scss'],
})
export class ExpenseFilterComponent {
  @Input() selected!: string;
  @Output() filterChange = new EventEmitter<string>();

  years: Array<Item> = DUMMY_YEAR_OPTIONS;

  onFilterChange(event: Event) {
    this.filterChange.emit((event.target as HTMLSelectElement).value);
  }
}
