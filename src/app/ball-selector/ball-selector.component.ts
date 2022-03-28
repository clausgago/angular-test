import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css'],
})
export class BallSelectorComponent {
  @Input() selectedBalls: number[] = [];

  @Output() ballSelectedEvent: EventEmitter<number> = new EventEmitter();

  @Output() clearSelectionEvent: EventEmitter<void> = new EventEmitter();

  addBall(evt: MouseEvent) {
    const button = evt.target as HTMLButtonElement;
    if (button.localName === 'button') {
      const value = parseInt(button.value);
      this.ballSelectedEvent.emit(value);
    }
  }

  clearSelection() {
    this.clearSelectionEvent.emit();
  }
}
