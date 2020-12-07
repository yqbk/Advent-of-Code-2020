const { readFileSync } = require('fs')
const filename = 'input.txt'

const arrayOfStrings = readFileSync(filename)
  .toString()
  .replace(/\r\n/g, '\n')
  .split('\n')

const array = new Uint32Array(arrayOfStrings.map((str) => Number(str)))

console.log('Start')

const sortedArray = array.sort()

console.log('sortedArray')

const findResult = () => {
  return sortedArray.find((value) => {
    const secondNumber = sortedArray.find((number) => number === 2020 - value)

    if (!secondNumber || secondNumber === 0) return false

    console.log('RESULT', {
      value,
      lookingFor: 2020 - value,
      secondNumber,
      multiply: value * secondNumber,
    })
    return value * secondNumber
  })
}

console.log(findResult())
