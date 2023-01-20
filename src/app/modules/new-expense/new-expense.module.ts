import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { NewExpenseComponent } from './new-expense.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';



@NgModule({
  declarations: [
    NewExpenseComponent,
    ExpenseFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    NewExpenseComponent
  ]
})
export class NewExpenseModule { }
