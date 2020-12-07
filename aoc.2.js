const { readFileSync } = require("fs");

const filename = "input.txt";

const lines = readFileSync(filename)
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");

const validatePasswordLine = (line) => {
  const [limit, letterStr, password] = line.split(" ");

  const [min, max] = limit.split("-");
  const letter = letterStr?.[0];

  if (!letter || !password) return false;

  const count = password.split("").filter((v) => v === letter).length;

  if (Number(min) <= Number(count) && Number(count) <= Number(max)) {
    console.log("-> ", { password, letter, count, max, min });

    return true;
  }

  return false;
};

console.log(lines.filter(validatePasswordLine).length)
