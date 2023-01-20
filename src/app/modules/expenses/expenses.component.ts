import { Component, Input } from '@angular/core';

import { Expense } from '../../models';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent {
  @Input() expenses!: Array<Expense>;
}
