"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Rendi",
    age: 34,
    hobbies: ["Sports", "Cooking"],
    access: [2, "READ"],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["Swimming", "Basketball"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=objs-arrays-enums.js.map