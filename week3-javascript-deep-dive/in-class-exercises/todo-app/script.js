// document.getElementById("loadTodos").addEventListener("click", loadTodos);
document.addEventListener("DOMContentLoaded", loadTodos);

async function loadTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    displayTodos(todos);
  } catch (error) {
    console.log("Error:", error);
    console.log(document.getElementById("todos"));
    document.getElementById("todos").innerHTML = "<p>Failed to load todos.</p>";
  }
}

function displayTodos(todos) {
  const container = document.getElementById("todos");
  container.innerHTML = ""; // Clear previous content

  // Filter completed todos and add priority
  //   const enrichedTodos = todos.map((todo) => ({ ...todo, priority: "High" }));

  //   if (enrichedTodos.length === 0) {
  //     container.innerHTML = "<p>No completed todos found.</p>";
  //     return;
  //   }

  const modifiedTodos = todos
    // .filter((todo) => todo.completed)
    .map((todo) => ({ ...todo, priority: todo.completed ? "High" : "" }));

  modifiedTodos.forEach((todo) => {
    // <div class="todo"></div>
    const todoElement = document.createElement("div");
    todoElement.className = `todo ${todo.completed ? "completed" : ""}`;
    todoElement.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Priority: ${todo.priority}</p>
        <p>Status: ${todo.completed ? "✅ Done" : "❌ Pending"}</p>
      `;
    container.appendChild(todoElement);
  });
}

//---
//---
//---
//---
//---
//---
//---
//---
// function displayTodos(todos) {
//   const container = document.getElementById("todos");
//   container.innerHTML = ""; // Clear previous content

//   // Filter completed todos and add priority
//   const enrichedTodos = todos.map((todo) => ({ ...todo, priority: "High" }));

//   if (enrichedTodos.length === 0) {
//     container.innerHTML = "<p>No completed todos found.</p>";
//     return;
//   }

//   enrichedTodos.forEach((todo) => {
//     const todoElement = document.createElement("div");
//     todoElement.className = `todo ${todo.completed ? "completed" : ""}`;
//     todoElement.innerHTML = `
//       <h3>${todo.title}</h3>
//       <p>Priority: ${todo.priority}</p>
//       <p>Status: ${todo.completed ? "✅ Done" : "❌ Pending"}</p>
//     `;
//     container.appendChild(todoElement);
//   });
// }

// loadTodos();
