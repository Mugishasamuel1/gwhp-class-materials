/*
 * Array Methods Practice - Other Important Methods
 *
 * Covers:
 * - find() / findIndex()
 * - some() / every()
 * - flat() / flatMap()
 * - sort()
 * - includes()
 * - Array.from() / Array.of()
 * - Destructuring
 */

// ======================
// 1. find() & findIndex()
// ======================

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// A. find() - Returns first matching element
const activeUser = users.find((user) => user.active);
console.log("First active user:", activeUser); // { id: 1, name: 'Alice', active: true }

// B. findIndex() - Returns index of first match
const inactiveIndex = users.findIndex((user) => !user.active);
console.log("Index of first inactive user:", inactiveIndex); // 1

// ======================
// 2. some() & every()
// ======================

const numbers = [10, 20, 30, 40, 50];

// A. some() - Tests if ANY element passes
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("Has even numbers?", hasEven); // true

// B. every() - Tests if ALL elements pass
const allOver15 = numbers.every((num) => num > 15);
console.log("All numbers > 15?", allOver15); // false

// ======================
// 3. flat() & flatMap()
// ======================

const nestedArray = [1, [2, 3], [4, [5, 6]]];

// A. flat() - Flattens nested arrays
const flat1 = nestedArray.flat();
console.log("Flat (depth 1):", flat1); // [1, 2, 3, 4, [5, 6]]

const flat2 = nestedArray.flat(2);
console.log("Flat (depth 2):", flat2); // [1, 2, 3, 4, 5, 6]

// B. flatMap() - Map then flatten
const sentences = ["Hello world", "Goodbye moon"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log("All words:", words); // ["Hello", "world", "Goodbye", "moon"]

// ======================
// 4. sort()
// ======================

const randomNumbers = [3, 1, 4, 1, 5, 9, 2, 6];

// A. Basic sort (modifies original)
randomNumbers.sort();
console.log("Sorted numbers (lexical):", randomNumbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// B. Proper numeric sort
const numericSort = [...randomNumbers].sort((a, b) => a - b);
console.log("Proper numeric sort:", numericSort);

// C. Sorting objects
const products = [
  { name: "Laptop", price: 999 },
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 499 },
];

products.sort((a, b) => a.price - b.price);
console.log("Products by price:", products);

// ======================
// 5. includes()
// ======================

const fruits = ["apple", "banana", "mango"];

console.log("Has banana?", fruits.includes("banana")); // true
console.log("Has orange?", fruits.includes("orange")); // false

// ======================
// 6. Array.from() & Array.of()
// ======================

// A. Array.from() - Creates from array-like/iterable
const str = "hello";
const letters = Array.from(str);
console.log("Letters from string:", letters); // ["h", "e", "l", "l", "o"]

// B. Array.of() - Creates from arguments
const nums = Array.of(1, 2, 3);
console.log("Array from values:", nums); // [1, 2, 3]

// ======================
// 7. Destructuring
// ======================

const colors = ["red", "green", "blue", "yellow"];

// A. Basic destructuring
const [firstColor, secondColor] = colors;
console.log("First two colors:", firstColor, secondColor); // red green

// B. Skipping items
const [, , thirdColor] = colors;
console.log("Third color:", thirdColor); // blue

// C. Rest pattern
const [primary, ...otherColors] = colors;
console.log("Primary:", primary); // red
console.log("Others:", otherColors); // ["green", "blue", "yellow"]

// ======================
// 8. Practical Exercises
// ======================

const inventory = [
  { id: 1, name: "Laptop", inStock: true, quantity: 5 },
  { id: 2, name: "Phone", inStock: false, quantity: 0 },
  { id: 3, name: "Tablet", inStock: true, quantity: 3 },
  { id: 4, name: "Monitor", inStock: true, quantity: 2 },
];

// Exercise 1: Check if any item is low stock (< 3)
const isLowStock = inventory.some(
  (item) => item.quantity > 0 && item.quantity < 3
);
console.log("Has low stock items?", isLowStock); // true

// Exercise 2: Get names of all in-stock items
const inStockItems = inventory
  .filter((item) => item.inStock)
  .map((item) => item.name);
console.log("In stock items:", inStockItems); // ["Laptop", "Tablet", "Monitor"]

// Exercise 3: Find first item that needs restocking
const needsRestock = inventory.find(
  (item) => item.inStock && item.quantity <= 2
);
console.log("Needs restock:", needsRestock); // { id: 4, name: 'Monitor', ... }

// ======================
// 9. Solutions
// ======================

/*
// Solutions for reference:

// find() / findIndex()
const activeUserSolution = users.find(user => user.active);
const inactiveIndexSolution = users.findIndex(user => !user.active);

// some() / every()
const hasEvenSolution = numbers.some(num => num % 2 === 0);
const allOver15Solution = numbers.every(num => num > 15);

// flat() / flatMap()
const flat1Solution = nestedArray.flat();
const flat2Solution = nestedArray.flat(2);
const wordsSolution = sentences.flatMap(sentence => sentence.split(' '));

// sort()
const numericSortSolution = [...randomNumbers].sort((a, b) => a - b);
const productsSortedSolution = [...products].sort((a, b) => a.price - b.price);

// includes()
const hasBananaSolution = fruits.includes('banana');

// Array.from() / Array.of()
const lettersSolution = Array.from(str);
const numsSolution = Array.of(1, 2, 3);

// Destructuring
const [firstColorSolution, secondColorSolution] = colors;
const [,, thirdColorSolution] = colors;
const [primarySolution, ...otherColorsSolution] = colors;

// Practical Exercises
const isLowStockSolution = inventory.some(item => item.quantity < 3);
const inStockItemsSolution = inventory.filter(item => item.inStock).map(item => item.name);
const needsRestockSolution = inventory.find(item => item.inStock && item.quantity < 2);
*/
