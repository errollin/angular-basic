import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { ExpensesComponent } from './expenses.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ExpenseDateComponent } from './expense-date/expense-date.component';
import { ExpenseFilterComponent } from './expense-filter/expense-filter.component';

@NgModule({
  declarations: [
    ExpensesComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseDateComponent,
    ExpenseFilterComponent,
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
