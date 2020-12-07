const { readFileSync } = require("fs");

const filename = "input2.txt";

const lines = readFileSync(filename)
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");

// const input = readFileSync(filename).toString().split('\n').filter(Boolean).map(v => v.match('(?<min>[0-9]+)-(?<max>[0-9]+) (?<required>[a-z]): (?<password>[a-z]+)').groups)

const validatePasswordLine = (line) => {
  const [limit, letterStr, password] = line.split(" ");

  const [min, max] = limit.split("-");
  const letter = letterStr?.[0];

  if (!letter || !password) return false;

  const count = password.split("").filter((v) => v === letter).length;

  if (Number(min) <= Number(count) && Number(count) <= Number(max)) {
    // console.log("-> ", { password, letter, count, max, min });
    return true;
  }

  return false;
};

console.log(lines.filter(validatePasswordLine).length)


const validatePasswordLine2 = (line) => {
    const [indexes, letterStr, password] = line.split(" ");
  
    const [index1, index2] = indexes.split("-");
    const letter = letterStr?.[0];
  
    if (!letter || !password) return false;
  
    const isIndex1Valid = password[index1 - 1] === letter
    const isIndex2Valid = password[index2 - 1] === letter
  
    if (isIndex1Valid ? !isIndex2Valid : isIndex2Valid) {
        // console.log("-> ", { password, letter, index1,isIndex1Valid, index2, isIndex2Valid });
        return true;
    }
  
    return false;
  };
  
  console.log(lines.filter(validatePasswordLine2).length)