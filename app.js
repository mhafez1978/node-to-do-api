const express = require('express');
const app = express();

const data = require('./data/taskList.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to your Node To Do App Server');
});

// API Routes
app.get('/tasks/api/v1/task/all', (req, res) => {
  const myList = [];
  const task = data.map((each) => {
    return each;
  });
  myList.push(task);
  res.send(myList);
});

app.post('/tasks/api/v1/task/add', (req, res) => {
  const id = Math.floor(Math.random() * 100);
  // console.log(id);
  const text = req.body;
  // console.log(text);
  const newTask = { id: id, text: text };
  if (!text) {
    res.send('please type task to add ...');
  } else {
    data.push(newTask);
    // console.log(JSON.stringify(newTask) + '  was added');
    res.send(data);
  }
});

app.get('/tasks/api/v1/task/:id', (req, res) => {
  let id = parseInt(req.params.id);
  console.log(typeof id);
  data.map((each) => {
    if (id === each.id) {
      res.json(each);
    }
  });
});

// app.patch("/tasks/api/v1/task/:id", (req, res) => {
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

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(
    `Your To Do App server is running on http://localhost:${PORT}...`
  );
});
