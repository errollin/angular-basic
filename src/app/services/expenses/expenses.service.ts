import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DUMMY_EXPENSES } from '../../data';
import { Expense, Item } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private expenses: Array<Expense> = DUMMY_EXPENSES;
  private filteredExpenses: Array<Expense> = [];
  private filteredYear: string = '2022';

  expensesChange = new BehaviorSubject<Array<Expense>>(DUMMY_EXPENSES);
  filteredExpensesChange = new BehaviorSubject<Array<Expense>>(
    DUMMY_EXPENSES.filter((expense) => {
      return expense.date.getFullYear().toString() === this.filteredYear;
    })
  );
  filteredYearChange = new BehaviorSubject<string>('2022');

  constructor() {}

  addExpense(expense: Expense) {
    this.expenses.unshift(expense);
    this.expensesChange.next(this.expenses.slice());
    this.getFilteredExpenses();
  }

  setFilteredYear(filteredYear: string) {
    this.filteredYear = filteredYear;
    this.filteredYearChange.next(this.filteredYear);
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    this.filteredExpenses = this.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === this.filteredYear;
    });
    this.filteredExpensesChange.next(this.filteredExpenses);
  }
}
