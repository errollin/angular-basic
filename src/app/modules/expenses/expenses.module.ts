import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../../shared/shared.module';
import { ExpensesComponent } from './expenses.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { ExpenseDateComponent } from './expense-date/expense-date.component';
import { ExpenseFilterComponent } from './expense-filter/expense-filter.component';
import { ExpenseChartComponent } from './expense-chart/expense-chart.component';
import { ChartComponent } from './expense-chart/chart/chart.component';
import { ChartBarComponent } from './expense-chart/chart-bar/chart-bar.component';

@NgModule({
  declarations: [
    ExpensesComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseDateComponent,
    ExpenseFilterComponent,
    ExpenseChartComponent,
    ChartComponent,
    ChartBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ExpensesComponent
  ]
})
export class ExpensesModule { }
