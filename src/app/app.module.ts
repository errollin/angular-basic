import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ExpensesModule } from './modules/expenses/expenses.module';
import { NewExpenseModule } from './modules/new-expense/new-expense.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, ExpensesModule, NewExpenseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
