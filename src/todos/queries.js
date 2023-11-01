const getTodos = "SELECT * FROM todos";
const getTodosByID = "SELECT * FROM todos WHERE id = $1";
const checkIdExists = "SELECT t FROM todos t WHERE t.id = $1";
const addTodo = "INSERT INTO todos (id, text, iscompleted) VALUES ($1, $2, $3)";
const removetoDo = "DELETE FROM todos WHERE id = $1";
const updateTodo = "UPDATE todos SET text = $2, iscompleted= $3 WHERE id = $1 ";

module.exports = {
  getTodos,
  getTodosByID,
  checkIdExists,
  addTodo,
  removetoDo,
  updateTodo,
};
