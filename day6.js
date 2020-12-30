// https://adventofcode.com/2020/day/6

const { readFileSync } = require("fs");

const filename = "day6.input.txt";

const groups = readFileSync(filename)
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n\n");

const countCustoms = (group) => {
  const people = group.split("\n");
  const uniqueCustoms = new Set();

  people.forEach((person) =>
    person.split("").forEach((custom) => uniqueCustoms.add(custom))
  );

  return uniqueCustoms.size;
};


// Part 1 answer
const allGroupsCustoms = groups.reduce(
  (allCustoms, group) => allCustoms + countCustoms(group),
  0
);

console.log(allGroupsCustoms);
