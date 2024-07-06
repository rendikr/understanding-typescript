const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

// this will not insert a new array of hobbies into activeHobbies, instead put each items of hobbies into activeHobbies
activeHobbies.push(...hobbies);

const user = {
  name: "max",
  age: 30,
};

const copiedUser = { ...user };
