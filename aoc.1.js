const { readFileSync } = require("fs");

const filename = "input.txt";
const NEEDED_VALUE = 2020;

const arrayOfStrings = readFileSync(filename)
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");

const sortedArray = arrayOfStrings
  .map((str) => Number(str))
  .sort((a, b) => a - b);

const findResult = () => {
  for (let firstIndex = 0; firstIndex < sortedArray.length; firstIndex++) {
    const firstNumber = sortedArray[firstIndex];

    if (firstNumber >= NEEDED_VALUE) break;

    for (let secondIndex = 0; secondIndex < sortedArray.length; secondIndex++) {
      const secondNumber = sortedArray[secondIndex];

      if (firstNumber + secondNumber >= NEEDED_VALUE) break;

      for (let thirdIndex = 0; thirdIndex < sortedArray.length; thirdIndex++) {
        const thirdNumber = sortedArray[thirdIndex];

        const sum = firstNumber + secondNumber + thirdNumber;
        const multipliedValues = firstNumber * secondNumber * thirdNumber;

        if (sum === NEEDED_VALUE &&  multipliedValues !== 0) {
          console.log("Result:", {
            sum,
            values: {
              firstNumber,
              secondNumber,
              thirdNumber,
            },
            multipliedValues
          });
        }

        if (sum >= NEEDED_VALUE) break;
      }
    }
  }
};

findResult();
