enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; // this is an Array
  access: [number, string]; // this is a tuple or fixed length Array
  role: Role; // enum
} = {
  name: "Rendi",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  access: [2, "READ"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Swimming", "Basketball"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
