import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedBalls: number[] = [];

  won: number | null = null;

  result: number | null = null;

  onBallSelected(value: number) {
    if (!this.selectedBalls.includes(value) && this.selectedBalls.length < 8) {
      this.selectedBalls.push(value);
    }
  }

  onClearSelection() {
    this.selectedBalls = [];
  }

  onPlaceBet(money: number) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    this.result = randomNumber;
    this.won = this.selectedBalls.includes(randomNumber) ? money * 1.5 : 0;
  }
}
