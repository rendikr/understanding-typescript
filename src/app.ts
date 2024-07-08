// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Well Done!");
//   }, 2000);
// });

// promise.then((data) => {
//   // data will be a type string because the return of the Promise is a string
//   console.log(data.split(" "));
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.name);
console.log(mergedObj.age);
