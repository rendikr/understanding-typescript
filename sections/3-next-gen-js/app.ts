const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// this will not insert a new array of hobbies into activeHobbies, instead put each items of hobbies into activeHobbies
activeHobbies.push(...hobbies);

const user = {
  name: "max",
  age: 30,
};

const copiedUser = { ...user };

const sum = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const sumNumbers = sum(5, 10, 2, 3.7);
console.log(sumNumbers);
