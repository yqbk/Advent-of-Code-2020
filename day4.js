// https://adventofcode.com/2020/day/4

const { readFileSync } = require("fs");

const filename = "day4.input.txt";

const input = readFileSync(filename)
  .toString()
  .split("\n\n")
  .map((passport) => passport.replace(/\n/g, " "));

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const checkPassport = (passport) => {
  const isMissingRequiredField = requiredFields.some((requiredField) => {
    const isMissing = !passport.match(`${requiredField}:`);
    // console.log("missingField: ", requiredField);

    return isMissing;
  });

  if (isMissingRequiredField) {
    return false;
  }

  // PART 2
  const byr = passport.match(/byr:(\d{4})/)[1];
  if (!byr) return false;
  const byrValidator = byr >= 1920 && byr <= 2002;
  if (!byrValidator) return false;
  //   console.log(" - byr", byr, byrValidator);

  const iyr = passport.match(/iyr:(\d{4})/)[1];
  if (!iyr) return false;
  const iyrValidator = iyr >= 2010 && iyr <= 2020;
  if (!iyrValidator) return false;
  //   console.log(" - iyr", iyr, iyrValidator);

  const eyr = passport.match(/eyr:(\d{4})/)[1];
  if (!eyr) return false;
  const eyrValidator = eyr >= 2020 && eyr <= 2030;
  if (!eyrValidator) return false;
  //   console.log(" - eyr", eyr, eyrValidator);

  const hgt = passport.match(/hgt:(\d{3}|\d{2})(in|cm)/);
  if (!hgt) return false;
  const hgtValidator =
    (hgt[2] === "cm" && hgt[1] >= 150 && hgt[1] <= 193) ||
    (hgt[2] === "in" && hgt[1] >= 59 && hgt[1] <= 76);
  if (!hgtValidator) return false;
  //    console.log(" - hgt", hgt[1], hgt[2], hgtValidator);

  const hclValidator = passport.match(/hcl:#([0-9a-f]{6})/)?.[1];
  if (!hclValidator) return false;
  //   console.log(" - hcl", hclValidator, !!hclValidator);

  const eclValidator = passport.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)/);
  if (!eclValidator) return false;
  //   console.log(" - ecl", eclValidator[0], !!eclValidator);

  const pidValidator = passport.match(/pid:\d{9}\b/);
  if (!pidValidator) return false;
  //   console.log(" - pid", pidValidator?.[0], !!pidValidator);

  return true;
};

console.log(input.filter(checkPassport).length);
