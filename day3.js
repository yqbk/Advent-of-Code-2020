// https://adventofcode.com/2020/day/3

const { readFileSync } = require("fs");

const filename = "day3.input.txt";

const map = readFileSync(filename)
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n")


const mapWidth = map[0].length

const findPath = (slope, currentPosition = [0,0], treesEncountered = 0) => {
    const newPosition = [(currentPosition[0] + slope[0]) % mapWidth, currentPosition[1] + slope[1]]
    const hasEncounteredTree = map[newPosition[1]][newPosition[0]] === '#'

    if (hasEncounteredTree) {
        treesEncountered += 1
    }

    if (newPosition[1] + slope[1] < map.length && newPosition[0] < map[newPosition[1]].length) {
        return findPath(slope, newPosition, treesEncountered)
    }

    return treesEncountered
}

const possibleSlopes = [[1,1], [3,1], [5,1], [7,1], [1,2]]


const result = possibleSlopes.reduce((acc,curr) => findPath(curr) * acc, 1)

console.log('part 1', findPath([3,1]))
console.log('part 2', result)


// const trees = ([x, y = 1]) => 
//   map.filter((row, i) => (map[i * y] || "")[(i * x) % row.length] === "#").length;
