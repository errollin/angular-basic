import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { ExpensesService } from '../../services/expenses/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  filteredYear!: string;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {
    this.expensesService.filteredYearChange.subscribe((filteredYear) => {
      this.filteredYear = filteredYear;
    });
  }

  handleFilterChange(selectedYear: string) {
    this.expensesService.setFilteredYear(selectedYear);
  }
}
