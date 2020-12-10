// https://adventofcode.com/2020/day/4

const { readFileSync } = require("fs");

const filename = "day4.input.txt";

const input = readFileSync(filename).toString().split("\n\n");

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const optionalFields = ["cid"];

const checkPassport = (passport) => {
  return requiredFields.every((requiredField) =>
    passport.match(`${requiredField}:`)
  );
};

console.log(input.filter(checkPassport).length);
