import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Expense } from '../../../models';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
})
export class ExpenseFormComponent {
  expenseForm!: FormGroup;

  @Output() expenseDataSave = new EventEmitter<Expense>();
  @Output() expenseDataCancelSave = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      date: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.expenseForm.invalid) {
      return;
    }
    const expenseData: Expense = {
      title: this.expenseForm.get('title')?.value,
      amount: +this.expenseForm.get('amount')?.value,
      date: new Date(this.expenseForm.get('date')?.value),
    };
    this.expenseDataSave.emit(expenseData);
    this.expenseForm.reset();
  }

  onCancel() {
    this.expenseDataCancelSave.emit();
  }
}
