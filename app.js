const express = require("express");
const app = express();

const data = require("./data/taskList.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to your Node To Do App Server");
});

// API Routes
app.get("/tasks/api/v1/all", (req, res) => {
  const myList = null || [];
  const task = data.map((each) => {
    return each;
  });
  myList.push(task);
  res.send(myList);
});

// app.post("/tasks/api/v1/add", (req, res) => {
//   res.send("Add a new task...");
// });

// app.get("/tasks/api/v1/task/:id", (req, res) => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((json) => res.send(json));
// });

// app.patch("/tasks/api/v1/:id", (req, res) => {
//   res.send(
//     "here we will be updating task details by retrieving it first, then updating what is needed..."
//   );
// });

// app.delete("/tasks/api/v1/:id", (req, res) => {
//   res.send("here we will be deleting a task by id...");
// });

// app.delete("/tasks/api/v1/all", (req, res) => {
//   res.send("here we will be deleting all tasks...");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Your To Do App server is running on http://localhost:${PORT}...`
  );
});
