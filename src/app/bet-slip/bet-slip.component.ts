import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css'],
})
export class BetSlipComponent {
  @Input() selectedBalls: number[] = [];

  @Output() placeBetEvent: EventEmitter<number> = new EventEmitter();

  money: number = 0;

  updateMoney(evt: Event) {
    const input = evt.target as HTMLInputElement;
    this.money = input.value ? parseInt(input.value) : 0;
  }

  placeBet(evt: Event) {
    this.placeBetEvent.emit(this.money);
  }
}
