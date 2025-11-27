import { Widget } from "./Widget.js";

export class PiggyBankWidget extends Widget {
  constructor(container, widgetPage) {
    super(container, widgetPage);

    this.value = 0;

    this.valueElement = container.querySelector(".piggy-bank-value");
    this.messageElement = container.querySelector(".piggy-bank-message");
    this.inputElement = container.querySelector(".piggy-bank-input");
    this.setButton = container.querySelector(".piggy-set");
    this.addButton = container.querySelector(".piggy-add");
    this.resetButton = container.querySelector(".piggy-reset");

    this.attachEvents();
    this.render();
  }

  attachEvents() {
    this.setButton.addEventListener("click", () => this.handleSet());
    this.addButton.addEventListener("click", () => this.handleAdd());
    this.resetButton.addEventListener("click", () => this.handleReset());
  }

  handleSet() {
    const raw = this.inputElement.value.trim();

    if (raw === "") {
      this.messageElement.textContent = "Type a number first.";
      return;
    }

    const num = Number(raw);

    if (Number.isNaN(num) || num < 0) {
      this.messageElement.textContent = "Please enter a number 0 or bigger.";
      return;
    }

    this.value = Math.floor(num);
    this.render();
    this.messageElement.textContent =
      `You set the piggy bank to ${this.value} coin` +
      (this.value === 1 ? "" : "s") + ".";
  }

  handleAdd() {
    this.value += 1;
    this.render();
    this.messageElement.textContent = "You added 1 coin!";
  }

  handleReset() {
    this.value = 0;
    this.render();
    this.messageElement.textContent = "You emptied the piggy bank.";
  }

  render() {
    this.valueElement.textContent = `Coins: ${this.value}`;
  }
}
