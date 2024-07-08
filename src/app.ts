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

const mergedObj = merge({ name: "Max", hobbies: ["sports"] }, { age: 30 });
console.log(mergedObj.name);
console.log(mergedObj.age);

interface Lenghty {
  length: number;
}

function countAndDescribe<T extends Lenghty>(el: T) {
  let descriptionText = "Got no value.";
  if (el.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (el.length > 1) {
    descriptionText = "Got " + el.length + " elements.";
  }
  return [el, descriptionText];
}

console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sports", "Cooking"]));

// U is using extends keyof T, it means U is a property of T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(4);
numberStorage.addItem(14);

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
