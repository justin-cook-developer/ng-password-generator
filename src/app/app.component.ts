import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  letters = "abcdefghijklmopqrstuv";
  numbers = "0123456789";
  symbols = "!@#$%^&*";

  length = 0;
  useLetters = true;
  useNumbers = false;
  useSymbols = false;

  password = "";

  public onLengthChange(event: InputEvent): void {
    this.length = parseInt((event.target as HTMLInputElement).value, 10);
  }

  public onCheckboxChange(event: InputEvent): void {
    const { name, checked } = event.target as HTMLInputElement;
    this[name] = checked;
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    this.generatePassword();
  }

  private getRandomCharacter(str: string): string {
    return str.charAt(Math.floor(str.length * Math.random()));
  }

  private generatePassword(): void {
    let characters = "";

    if (this.useLetters) {
      characters += this.letters;
    }
    if (this.useNumbers) {
      characters += this.numbers;
    }
    if (this.useSymbols) {
      characters += this.symbols;
    }

    let password = "";

    for (let i: number = 0; i < this.length; i++) {
      password += this.getRandomCharacter(characters);
    }

    this.password = password;
  }
}
