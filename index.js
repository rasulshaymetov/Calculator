const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const numbers = document.querySelectorAll(".numbers");
const result = document.getElementById("result");
const clear = document.getElementById("clear");
const operator = document.querySelectorAll(".operator");
const process = document.querySelector(".progress");
const equal = document.getElementById("equals");
const dot = document.getElementById("dot");
const percent = document.getElementById("percent");
const square = document.getElementById("square");
const grayBtn = document.querySelectorAll(".gray-button");

let isNull = true;
let isFirstValue = true;
let CurrentOperator = "";
let operators = [];
let isOperator = false;
let percentValue = 0;
let lastOperator = "";
let lastValue = 0;
let isDot = false;
let count = 0;
let equalIsCliked = false;
let basicOp = Boolean;
let incClear = Boolean;
let numLock = false;
let lastSecValue = 0;
let equalLength = 0;
let clearLength = 0;
let firstValue = 0;

// numbers[9].disabled = true
// dot.disabled = true

numbers.forEach(function (el) {
  el.addEventListener("click", function () {
    equalLength = 0;
    clearLength = 0;
    lastSecValue = 0;

    count++;
    clear.innerHTML = "C";
    clearAnimation();
    if (result.innerHTML.length >= 5) {
      result.style.fontSize = "100px";
    }
    if (result.innerHTML.length >= 7) {
      result.style.fontSize = "85px";
    }
    if (result.innerHTML.length >= 8) {
      result.style.fontSize = "70px";
    }
    if (result.innerHTML.length >= 9 && isNull === false) {
      numLock = true;
    }

    if (numLock === false) {
      if (isFirstValue === true) {
        if (isNull === true) {
          result.innerHTML = el.innerHTML;
          isNull = false;
          numbers[9].disabled = false;
          dot.disabled = false;
          process.innerHTML = el.innerHTML;
          firstValue = el.innerHTML;
        } else {
          result.innerHTML += el.innerHTML;
          process.innerHTML += el.innerHTML;
          firstValue += el.innerHTML;
        }
      } else {
        if (isNull === true) {
          result.innerHTML = el.innerHTML;
          process.innerHTML += el.innerHTML;
          isNull = false;
          // numbers[9].disabled = false
          dot.disabled = false;
          CurrentOperator = "";
          operators = [];
          isOperator = false;
        } else {
          result.innerHTML += el.innerHTML;
          process.innerHTML += el.innerHTML;
        }
      }
    } else {
    }
  });
});

operator.forEach(function (el) {
  el.addEventListener("click", function () {
    el.innerHTML == "+" || el.innerHTML == "-"
      ? (basicOp = true)
      : (basicOp = false);
    isOperator = true;
    equalIsCliked = false;
    clearLength = 0;
    count = 0;
    numbers[9].disabled = false;
    lastValue = result.innerHTML;
    lastOperator = el.innerHTML;
    dot.disabled = false;
    equalLength = 0;
    lastSecValue = 0;

    if (incClear === true) {
      process.innerHTML = process.innerHTML.replace(/.$/, el.innerHTML);
      process.innerHTML = process.innerHTML.slice(0, -1);
      isOperator === true;
      incClear = false;
    }

    if (isOperator === true && operators.length < 1) {
      CurrentOperator = el.innerHTML;
      process.innerHTML += CurrentOperator;
      operators.push(CurrentOperator);
    } else if (isOperator === true && operators.length >= 1) {
      process.innerHTML = process.innerHTML.replace(/.$/, el.innerHTML);
    }
    numLock = false;
    isFirstValue = false;
    isNull = true;
  });
});
numbers[9].addEventListener("click", function () {
  if (result.innerHTML[0] === "0" && isFirstValue === true) {
    numbers[9].disabled = true;
    console.log("debagging");
  } else {
    numbers[9].disabled = false;
  }
});
dot.addEventListener("click", function () {
  if (isDot === false) {
    dot.disabled = true;
  } else {
    dot.disabled = false;
  }
});

document.getElementById("showInfo").addEventListener("click", function () {
  console.log(`
        IsNull: ${isNull}
        IsFirstValue: ${isFirstValue}
        CurrentOperator: ${CurrentOperator}
        Operators: ${operators}
        firstOperator: ${operators[0]}
        isOperator: ${isOperator}
        Oper. length: ${operators.length}
        Last Operator: ${lastOperator}
        Last Value: ${lastValue}
        Is Dot: ${isDot}
        Count: ${count}
        Equal is cliked: ${equalIsCliked}
        Basic Op: ${basicOp}
        incClear:${incClear}
        NumLock:${numLock}
        EqualLength: ${equalLength}
        LastSecValue:${lastSecValue}
        ClearLength:${clearLength}
        FirstValue:${firstValue}`);
});

equal.addEventListener("click", function () {
  if (equalLength < 1) {
    lastSecValue = lastOperator.replace(/X/gi, "*") + result.innerHTML;
    process.innerHTML = `${eval(process.innerHTML.replace(/X/gi, "*"))}`;
    result.innerHTML = process.innerHTML;
    equalIsCliked = true;
    numLock = false;
    isDot = false;
    equalLength++;
  } else {
    result.innerHTML = eval(result.innerHTML + lastSecValue);
    process.innerHTML = result.innerHTML;
  }
});
clear.addEventListener("click", function () {
  if (equalIsCliked == true) {
    isFirstValue = true;
    CurrentOperator = "";
    operators = [];
    equalIsCliked = false;
    isNull = true;
    result.innerHTML = 0;
    process.innerHTML = 0;
    clear.innerHTML = "AC";
    lastSecValue = 0;
  } else {
    if (clear.innerHTML === "C") {
      if (clearLength == 0) {
        isNull = true;
        result.innerHTML = 0;

        console.log("Неполная очистка второго значения");
        incClear = true;
        clearLength++;
        for (let i = 0; i < count; i++) {
          process.innerHTML = process.innerHTML.slice(0, -1);
          console.log("Deleted element");
        }
      } else if (clearLength > 0) {
        process.innerHTML = process.innerHTML.slice(0, -1);
        clear.innerHTML = "AC";
        isNull = true;
        clearLength = 0;
        incClear = false;

        // isFirstValue = true
      }
    } else {
      isFirstValue = true;
      CurrentOperator = "";
      operators = [];
      console.log("sd");
      result.innerHTML = 0;
      process.innerHTML = "Clear";
      lastSecValue = 0;
      lastOperator = 0;
      clearLength = 0;
      equalLength = 0;
      incClear = false;
    }
  }
  isDot = false;
  numLock = false;
  lastValue = 0;
  firstValue = 0;
  isFirstValue = true;
  result.style.fontSize = "120px";
  numbers.forEach((e) => (e.disabled = false));
  count = 0;
  dot.disabled = false;
  // numbers[9].disabled = true
  clearAnimation();
});

percent.addEventListener("click", function () {
  percentValue = (firstValue / 100) * result.innerHTML;
  process.innerHTML = process.innerHTML.replace(
    lastOperator + result.innerHTML,
    lastOperator + percentValue
  );
  result.innerHTML = percentValue;
  process.innerHTML = result.innerHTML;

  console.log(percentValue);
  firstValue = percentValue;
});

dot.addEventListener("click", function () {
  if (isFirstValue === true) {
    if (isNull === true) {
      process.innerHTML = "0.";
    } else {
      process.innerHTML += ".";
    }
    result.innerHTML += ".";
  } else {
    if (isNull === true) {
      result.innerHTML = "0.";
      process.innerHTML += "0.";
    } else {
      result.innerHTML += ".";
      process.innerHTML += ".";
    }
  }

  isNull = false;
});

square.addEventListener("click", () => {
 var squareResult = result.innerHTML * result.innerHTML;

  if (equalIsCliked === true || isFirstValue === true) {
    process.innerHTML = process.innerHTML.replace(
      process.innerHTML,
      squareResult
    );
    console.log("Default replace");
  } else {
    process.innerHTML = process.innerHTML.replace(
      (lastOperator + result.innerHTML),
      (lastOperator + squareResult)
    );
    result.innerHTML = squareResult;
    console.log("Advanced replace");
  }
  console.log(squareResult);
});

// * Disabling operator's buttons and animating

operator.forEach(function (el) {
  el.addEventListener("click", function () {
    if (el.innerHTML == "+") {
      disablePlus();
    }
    if (el.innerHTML == "/") {
      disableDivision();
    }
    if (el.innerHTML == "X") {
      disableMultiply();
    }
    if (el.innerHTML == "-") {
      disableMinus();
    }
  });
});

function disablePlus() {
  plus.classList.toggle("disabled");
  plus.disabled = true;
  division.disabled = false;
  multiply.disabled = false;
  minus.disabled = false;
  minus.classList.remove("disabled");
  multiply.classList.remove("disabled");
  division.classList.remove("disabled");
}
function disableDivision() {
  division.classList.toggle("disabled");
  plus.disabled = false;
  division.disabled = true;
  multiply.disabled = false;
  minus.disabled = false;
  plus.classList.remove("disabled");
  minus.classList.remove("disabled");
  multiply.classList.remove("disabled");
}
function disableMultiply() {
  multiply.classList.toggle("disabled");
  plus.disabled = false;
  division.disabled = false;
  multiply.disabled = true;
  minus.disabled = false;
  plus.classList.remove("disabled");
  minus.classList.remove("disabled");
  division.classList.remove("disabled");
}
function disableMinus() {
  minus.classList.toggle("disabled");
  plus.disabled = false;
  division.disabled = false;
  multiply.disabled = false;
  minus.disabled = true;
  plus.classList.remove("disabled");
  multiply.classList.remove("disabled");
  division.classList.remove("disabled");
}
function clearAnimation() {
  plus.classList.remove("disabled");
  multiply.classList.remove("disabled");
  division.classList.remove("disabled");
  minus.classList.remove("disabled");
  minus.disabled = false;
  plus.disabled = false;
  division.disabled = false;
  multiply.disabled = false;
}
numbers.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.add("animNum");
    setTimeout(function () {
      el.classList.remove("animNum");
    }, 50);
  });
});

equal.onclick = function () {
  equal.classList.add("animEqual");
  setTimeout(function () {
    equal.classList.remove("animEqual");
  }, 50);
};

grayBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.add("animNum");
    setTimeout(function () {
      el.classList.remove("animNum");
    }, 50);
  });
});
