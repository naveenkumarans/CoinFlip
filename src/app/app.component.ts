import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  walletAddress: string = '0x164b45b5Bf2d00Fc78d28f601AC45B105eD496E8';
  connected: boolean = true;
  balance: number = 1000;
  betAmount: number = 0;
  betChoice: 'heads' | 'tails' = 'heads';
  lastResult: string | null = null;
  message: string = '';

  placeBet() {
    if (this.betAmount <= 0 || this.betAmount > this.balance) {
      alert('Please enter a valid bet amount within your balance.');
      return;
    }
    const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
    this.lastResult = flipResult;

    if (this.betChoice === flipResult) {
      this.balance += this.betAmount;
      this.message = `You won! The coin landed on ${flipResult}. Your new balance is ${this.balance} tokens.`;
    } else {
      this.balance -= this.betAmount;
      this.message = `You lost! The coin landed on ${flipResult}. Your new balance is ${this.balance} tokens.`;
    }
  }
}
