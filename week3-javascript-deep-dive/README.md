# Week 3: JavaScript Deep Dive – Full Course Documentation
**Student and Teacher Guide**

This document contains **everything you need to teach** this session effectively, including:  
✔ **Detailed explanations** (simplified for students).  
✔ **Code samples** (with expected outputs).  
✔ **Live coding exercises**.  
✔ **Homework & assessment instructions**.  

---

## 1. Introduction (10 min)
**Objective:** Set the stage for the lesson and connect it to prior knowledge.

### What to Say:
*"Last week, we covered JavaScript basics like variables, loops, and DOM manipulation. Today, we’re diving deeper into two powerful concepts: **Array Methods** and **Asynchronous JavaScript**. By the end, you’ll fetch data from an API and manipulate it like a pro!"*

### Key Points to Mention:
✅ **Advanced Array Methods** (`map`, `filter`, `reduce`) help process data efficiently.  
✅ **Asynchronous JS** (Promises, `async/await`) prevents freezing your app while waiting for data.  
✅ **Today’s Goal:** Build a **Todo List App** using a mock API.

---

## 2. Session 1: Advanced Array Methods (1 hour)

### A. Functional Programming (30 min)
**Objective:** Teach how to manipulate arrays without loops.

#### 1. `map()` – Transform Every Item
**Explanation:**  
- Takes an array, applies a function to each item, and returns a **new array**.  
- Does **not** modify the original array (immutability).  

**Example:**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

#### 2. `filter()` – Select Items Conditionally
**Explanation:**  
- Returns a **new array** with only items that pass a test.  

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

#### 3. `reduce()` – Combine Items into One Value
**Explanation:**  
- Takes an array and **accumulates** a single result (e.g., sum, max value).  

**Example:**
```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 6
```

#### 4. Method Chaining
**Explanation:**  
- Combine `map`, `filter`, and `reduce` in one go.  

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 10);
console.log(result); // [30, 40]
```

✅ **Exercise:**
- Given `const prices = [5, 10, 15, 20];`, write a chain to:  
  1. Filter prices **above 10**.  
  2. Apply a **50% discount**.  
  3. **Sum** the discounted prices.  

**Solution:**
```javascript
const total = prices
  .filter(price => price > 10)
  .map(price => price * 0.5)
  .reduce((sum, price) => sum + price, 0);
console.log(total); // 17.5
```

---

### B. Array Manipulation (25 min)
**Objective:** Teach lesser-known but useful array methods.

#### 1. `find()` vs `filter()`
```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }
```

#### 2. `some()` & `every()`
```javascript
const ages = [18, 22, 25];
const allAdults = ages.every(age => age >= 18); // true
const hasTeen = ages.some(age => age < 20);    // true
```

#### 3. `flat()` & `flatMap()`
```javascript
const nested = [1, [2, 3], 4];
const flat = nested.flat(); // [1, 2, 3, 4]
```

✅ **Exercise:**
- Given `const data = [[1, 2], [3, 4], 5];`, flatten it and double each number.

**Solution:**
```javascript
const result = data.flat().map(num => num * 2);
console.log(result); // [2, 4, 6, 8, 10]
```

---

## 3. Session 2: Asynchronous JavaScript (1 hour)

### A. Callbacks & Promises (30 min)

#### 1. Callback Hell
```javascript
getUser(userId, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments); // Nested mess!
    });
  });
});
```

#### 2. Promises
```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

✅ **Exercise:**
```javascript
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(user => console.log(user.name))
  .catch(err => console.error(err));
```

---

### B. Async/Await (25 min)
```javascript
async function fetchTodo() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchTodo();
```

✅ **Exercise:**
```javascript
async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    console.error(err);
  }
}
getUser();
```

---

## 4. In-Class Exercise: Todo List App (30 min)
```javascript
async function loadTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    const completedTodos = todos.filter(todo => todo.completed);
    const enrichedTodos = completedTodos.map(todo => ({
      ...todo,
      priority: "high"
    }));
    console.log(enrichedTodos);
  } catch (error) {
    console.error("Failed to load todos:", error);
  }
}
loadTodos();
```

---

## 5. Homework Assignment: Weather App
```javascript
async function getWeather(city) {
  const apiKey = "YOUR_API_KEY";
  const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}\`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}
getWeather("London");
```

---

## 6. Summary & Dismissal (5 min)
**Recap:**  
✔ **Array Methods** for data transformation.  
✔ **Asynchronous JS** for API calls.  
✔ Built a **Todo List App** with real data.

**Next Steps:**  
- Complete the **Weather App** homework.  
- Experiment with different APIs!

**Q&A → End of Session.**

---

### Teacher’s Notes:
- **Common Mistakes:** Forgetting `await`, not handling errors.
- **Debugging Tip:** Use `console.log()` at each step to verify data.

**Good luck, and happy coding!** 🚀
