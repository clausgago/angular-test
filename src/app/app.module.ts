import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, BetSlipComponent, BallSelectorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
