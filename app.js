const express = require('express');
const app = express();

const data = require('./data/taskList.js');
const myList = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to your Node To Do App Server');
});

// API Routes
app.get('/tasks/api/v1/task/all', (req, res) => {
  let task = data.map((each) => {
    return each;
  });
  res.send(task);
});

app.post('/tasks/api/v1/task/add', (req, res) => {
  const id = Math.floor(Math.random() * 100);
  // console.log(id);
  const text = req.body.text;
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

app.get('/tasks/api/v1/task/:id', async (req, res) => {
  const id = Number(req.params.id);
  const result = data.map((task) => {
    if (task.id === id) {
      return task;
    } else {
      const msg = { error: 'no task found by this id...' };
      return msg;
    }
  });
  // console.log(result);
  const d = result.map((each) => {
    if (each.id === id && !each.error) {
      const r = each.id;
      const t = each.text;
      const m = { id: r, task: t };
      res.send(m);
    }
  });
});

app.patch('/tasks/api/v1/task/:id', (req, res) => {
  let id = req.params.id;
  let text = req.body.text;
  id = Number(id);
  data.map((task) => {
    if (task.id === id) {
      task = { id: task.id, text: text };
      res.send(task);
    }
  });
});

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
