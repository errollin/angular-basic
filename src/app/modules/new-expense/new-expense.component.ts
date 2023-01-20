import { Component, EventEmitter, Output } from '@angular/core';

import { Expense } from '../../models';
import { ExpensesService } from './../../services/expenses/expenses.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss'],
})
export class NewExpenseComponent {
  isEditing: boolean = false;

  constructor(private expensesService: ExpensesService) {}

  handleSaveExpenseData(enteredExpenseData: Expense) {
    const expenseData: Expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    this.expensesService.addExpense(expenseData);
    this.handleStopEditing();
  }

  handleStartEditing() {
    this.isEditing = true;
  }

  handleStopEditing() {
    this.isEditing = false;
  }
}
