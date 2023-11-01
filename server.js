const express = require("express");
const getTodoroutes = require("./src/todos/routes");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use(express.json());
app.use("/todos", getTodoroutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
