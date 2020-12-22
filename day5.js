// https://adventofcode.com/2020/day/5

const { readFileSync } = require("fs");

const filename = "day5.input.txt";

const input = readFileSync(filename)
    .toString()
    .replace(/\r\n/g, "\n")
    .split("\n")

const MAX_ROW = 127
const MAX_COL = 7

// F means "front", B means "back", L means "left", and R means "right"
// Every seat also has a unique seat ID: multiply the row by 8, then add the column. In this example, the seat has ID 44 * 8 + 5 = 357.
const divide = (range, direction) => {
    const [min, max] = range
    const mid = Math.ceil((max-min) /2) + min

    const isUpper = direction === 'B' || direction === 'R'

    return isUpper ? [mid, max] : [min, mid]
}

const getPosition = (coords, max) => coords.reduce((range, direction) => {
    return divide(range, direction)

}, [0, max])[0]

const getBoardingPassData = (input) => {
    const rowCoords = input.slice(0,7).split('')
    const colCoords = input.slice(7,10).split('') 

    const row = getPosition(rowCoords, MAX_ROW)
    const col = getPosition(colCoords, MAX_COL)
    const seatId =  getSeatId(row, col)

    return {row, col, seatId}
}

const getSeatId = (row, col) => row * 8 + col

const test = (input, data) => {
    if (JSON.stringify(getBoardingPassData(input))  !== JSON.stringify(data)) {
        console.log('FAILED', input)
    }
}

const testData = {
    'FBFBBFFRLR': {
        row: 44,
        col: 5,
        seatId: 357
    },
    'BFFFBBFRRR':{
        row: 70,
        col: 7,
        seatId: 567
    }, 
    'FFFBBBFRRR':{
        row: 14,
        col: 7,
        seatId: 119
    }, 
    'BBFFBBFRLL': {
        row: 102,
        col: 4,
        seatId: 820
    }
}

// Tests
Object.keys(testData).forEach(boardingPass => test(boardingPass, testData[boardingPass]))

// Part 1 solution
const sortedSeatIds = input.map(boardingPass => getBoardingPassData(boardingPass).seatId).sort()
console.log('Biggest SeatId', sortedSeatIds[sortedSeatIds.length-1])

// Part 2 solution
const findSeatId = () => {
    const availableSeatIds = sortedSeatIds.slice(1, sortedSeatIds.length)
    
    for(const [index, seatID] of availableSeatIds.entries()){
        if (availableSeatIds[index + 1] !== seatID + 1){
            console.log('Your seat ID:', seatID + 1 )
            break;
        }
    }
}

findSeatId()