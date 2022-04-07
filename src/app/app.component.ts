import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';
  useLetters() {
    this.includeLetters = !this.includeLetters;
  }
  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  useSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    this.password = Math.random().toString(36).slice(-8);
    console.log(this.includeLetters);
    console.log('for Numbers: ' + this.includeNumbers);
    console.log('for Symbols: ' + this.includeSymbols);
  }
  getPassword() {
    return this.password;
  }
}
