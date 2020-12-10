// https://adventofcode.com/2020/day/3

const { readFileSync } = require("fs");

const filename = "day3.input.txt";

const lines = readFileSync(filename)
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n")


const slope = [3, 1]
const mapWidth = lines[0].length

const findPath = (currentPosition, treesEncountered) => {
    console.log('treesEncountered', treesEncountered)

    const newPosition = [(currentPosition[0] + slope[0]) % mapWidth, currentPosition[1] + slope[1]]

    const hasEncounteredTree = lines[newPosition[1]][newPosition[0]] === '#'

    if (hasEncounteredTree) {
        treesEncountered += 1
    }

    if (newPosition[1] < lines.length && newPosition[0] < lines[newPosition[1]].length) {
        return findPath(newPosition, treesEncountered)
    }

    return treesEncountered
}

console.log(findPath([0,0], 0))