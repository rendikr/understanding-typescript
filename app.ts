const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Rendi",
  age: 34,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Swimming", "Basketball"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
