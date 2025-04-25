/*
 * Array Methods Practice - map, filter, reduce
 *
 * This file contains exercises with:
 * - Basic examples
 * - Practical use cases
 * - Chaining exercises
 * - Solutions (commented)
 */

// ======================
// 1. BASIC EXAMPLES
// ======================

const numbers = [1, 2, 3, 4, 5];

// A. MAP - Transform each element
// Exercise: Double each number
const doubled = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6, 8, 10]

// B. FILTER - Select elements by condition
// Exercise: Get even numbers
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evens); // [2, 4]

// C. REDUCE - Accumulate values
// Exercise: Sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // 15

// ======================
// 2. PRACTICAL EXAMPLES
// ======================

const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Phone", price: 699, inStock: false },
  { id: 3, name: "Tablet", price: 499, inStock: true },
  { id: 4, name: "Headphones", price: 149, inStock: true },
];

// A. Get all products in stock
const inStockProducts = products.filter((product) => product.inStock);
console.log("In stock products:", inStockProducts);

// B. Get array of product names only
const productNames = products.map((product) => product.name);
console.log("Product names:", productNames); // ['Laptop', 'Phone', 'Tablet', 'Headphones']

// C. Calculate total value of in-stock products
const totalInventoryValue = products
  .filter((product) => product.inStock)
  .reduce((total, product) => total + product.price, 0);
console.log("Total inventory value:", totalInventoryValue);

// ======================
// 3. CHAINING EXERCISES
// ======================

const students = [
  { name: "Alice", grade: 85, passed: true },
  { name: "Bob", grade: 72, passed: true },
  { name: "Charlie", grade: 58, passed: false },
  { name: "Dana", grade: 90, passed: true },
  { name: "Eli", grade: 65, passed: false },
];

// Exercise 1: Get names of students who passed (grade >= 70)
const passingStudents = students
  .filter((student) => student.passed)
  .map((student) => student.name);
console.log("Passing students:", passingStudents); // ['Alice', 'Bob', 'Dana']

// Exercise 2: Calculate average grade of passing students
const averagePassingGrade = students
  .filter((student) => student.passed)
  .reduce((sum, student, index, array) => {
    sum += student.grade;
    if (index === array.length - 1) {
      return sum / array.length;
    }
    return sum;
  }, 0);
console.log("Average passing grade:", averagePassingGrade); // ~82.33

// ======================
// 4. ADVANCED EXERCISES
// ======================

const data = [
  { category: "Fruit", item: "Apple", quantity: 5, price: 0.95 },
  { category: "Fruit", item: "Banana", quantity: 3, price: 0.55 },
  { category: "Vegetable", item: "Carrot", quantity: 10, price: 0.3 },
  { category: "Vegetable", item: "Broccoli", quantity: 2, price: 1.2 },
];

// Exercise: Create an object with total quantity by category
// Expected: { Fruit: 8, Vegetable: 12 }
const categoryTotals = data.reduce((totals, item) => {
  totals[item.category] = (totals[item.category] || 0) + item.quantity;
  return totals;
}, {});
console.log("Category totals:", categoryTotals);

// ======================
// 5. SOLUTIONS
// ======================

/*
// Solutions for reference:

// A. MAP solutions
const doubledSolution = numbers.map(num => num * 2);

// B. FILTER solutions
const evensSolution = numbers.filter(num => num % 2 === 0);

// C. REDUCE solutions
const sumSolution = numbers.reduce((total, num) => total + num, 0);

// Practical example solutions
const inStockProductsSolution = products.filter(p => p.inStock);
const productNamesSolution = products.map(p => p.name);
const totalValueSolution = products
  .filter(p => p.inStock)
  .reduce((total, p) => total + p.price, 0);

// Chaining solutions
const passingStudentsSolution = students
  .filter(s => s.passed)
  .map(s => s.name);

const averageGradeSolution = students
  .filter(s => s.passed)
  .reduce((sum, s, i, arr) => {
    sum += s.grade;
    return i === arr.length - 1 ? sum / arr.length : sum;
  }, 0);

// Advanced solution
const categoryTotalsSolution = data.reduce((totals, item) => {
  totals[item.category] = (totals[item.category] || 0) + item.quantity;
  return totals;
}, {});
*/
