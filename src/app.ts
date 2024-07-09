import { Product } from "./product.model";
import "reflect-metadata";
import { plainToClass } from "class-transformer";

const products = [
  { title: "Carpet", price: 29.99 },
  { title: "Book", price: 12.99 },
];

// the old way
// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

// using class-transformer
const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
