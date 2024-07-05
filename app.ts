const person: {
  name: string;
  age: number;
  hobbies: string[]; // this is an Array
  role: [number, string]; // this is a Tuple or fixed length Array
} = {
  name: "Rendi",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivities: string[];
favoriteActivities = ["Swimming", "Basketball"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
