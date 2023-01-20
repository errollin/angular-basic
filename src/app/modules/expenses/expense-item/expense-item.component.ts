import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent {
  @Input() title!: string;
  @Input() amount!: number;
  @Input() date!: Date;
}
