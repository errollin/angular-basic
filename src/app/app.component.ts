import { Component } from '@angular/core';

import { DUMMY_EXPENSES } from './data';
import { Expense } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  expenses: Array<Expense> = DUMMY_EXPENSES;
}
