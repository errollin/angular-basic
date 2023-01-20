import { Component, EventEmitter } from '@angular/core';

import { Expense } from '../../models';
import { Output } from '@angular/core';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss'],
})
export class NewExpenseComponent {
  @Output() expenseAdd = new EventEmitter<Expense>();

  isEditing: boolean = false;

  handleSaveExpenseData(enteredExpenseData: Expense) {
    const expenseData: Expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    this.expenseAdd.emit(expenseData);
    this.handleStopEditing();
  }

  handleStartEditing() {
    this.isEditing = true;
  }

  handleStopEditing() {
    this.isEditing = false;
  }
}
