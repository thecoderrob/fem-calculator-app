class Calculator {
  constructor(previousTextEl, currentTextEl) {
    this.previousTextEl = previousTextEl;
    this.currentTextEl = currentTextEl;

    this.previousText = "";
    this.currentText = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    if (number === "." && this.currentText.includes(".")) return;
    this.currentText += number;
  }

  selectOperation(operation) {
    if (this.currentText === "") return;
    if (this.previousText !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousText = this.currentText;
    this.currentText = "";
  }

  delete() {
    if (this.currentText === "") return;
    const editedText = this.currentText.slice(0, -1);

    this.currentText = editedText;
  }

  reset() {
    this.previousText = "";
    this.currentText = "";
    this.operation = undefined;
  }

  compute() {
    let computedVal;
    const parsedPrevious = parseFloat(this.previousText);
    const parsedCurrent = parseFloat(this.currentText);

    if (isNaN(parsedPrevious) || isNaN(parsedPrevious)) return;

    switch (this.operation) {
      case "+":
        computedVal = parsedPrevious + parsedCurrent;
        break;
      case "-":
        computedVal = parsedPrevious - parsedCurrent;
        break;
      case "/":
        computedVal = parsedPrevious / parsedCurrent;
        break;
      case "x":
        computedVal = parsedPrevious * parsedCurrent;
        break;
      default:
        return;
    }

    this.currentText = computedVal.toString();
    this.operation = undefined;
    this.previousText = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integers = parseFloat(stringNumber.split(".")[0]);
    const decimals = stringNumber.split(".")[1];

    let integerEdited;

    if (isNaN(integers)) {
      integerEdited = "";
    } else {
      integerEdited = integers.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimals != null) {
      return `${integerEdited}.${decimals}`;
    } else {
      return integerEdited;
    }
  }

  updateDisplay() {
    this.currentTextEl.innerText = this.getDisplayNumber(this.currentText);
    if (this.operation != null) {
      this.previousTextEl.innerText = `${this.getDisplayNumber(
        this.previousText
      )} ${this.operation}`;
    } else {
      this.previousTextEl.innerText = "";
    }
  }
}

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const deleteBtn = document.querySelector("[data-delete]");
const resetBtn = document.querySelector("[data-reset]");
const equalsBtn = document.querySelector("[data-equals]");
const previousTextEl = document.querySelector("[data-previous-text]");
const currentTextEl = document.querySelector("[data-current-text]");

const calculator = new Calculator(previousTextEl, currentTextEl);

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerHTML);
    calculator.updateDisplay();
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.selectOperation(btn.innerHTML);
    calculator.updateDisplay();
  });
});

equalsBtn.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

resetBtn.addEventListener("click", () => {
  calculator.reset();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
