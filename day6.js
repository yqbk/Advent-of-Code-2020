// https://adventofcode.com/2020/day/6

const { group } = require("console");
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

console.log('Part 1 answer:', allGroupsCustoms);

const countSharedCustoms = (group) => {
  const people = group.split("\n");
  let commonCustoms = new Set(people[0].split(""));

  people.forEach((person) => {
    const personCustoms = person.split("")
    const personUniqueCustoms = new Set(personCustoms)

    commonCustoms = new Set([...commonCustoms].filter(custom => personUniqueCustoms.has(custom)))
  });

  return commonCustoms.size;
};


// Part 2 answer
const allGroupsSharedCustoms = groups.reduce(
  (allSharedCustoms, group) => allSharedCustoms + countSharedCustoms(group),
  0
);

console.log('Part 2 answer:', allGroupsSharedCustoms);