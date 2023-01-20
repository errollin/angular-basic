import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { ExpensesComponent } from './expenses.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ExpenseDateComponent } from './expense-date/expense-date.component';

@NgModule({
  declarations: [
    ExpensesComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseDateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ExpensesComponent
  ]
})
export class ExpensesModule { }
