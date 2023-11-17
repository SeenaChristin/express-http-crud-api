const db = require("../../models");
const Todos = db.todos;
const handleError = require("../../Middlewares/ErrorHandler");

const getTodos = async (req, res) => {
  let result = await Todos.findAll({});
  if (result) {
    res.status(200).json({ result });
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
};

const getTodosById = async (req, res) => {
  const id = parseInt(req.params.id);
  let result = await Todos.findOne({ where: { id: id } });
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "No such ID found" });
  }
};

const addTodo = async (req, res) => {
  const result = await Todos.create(req.body);
  if (result) {
    res.status(200).json({ result });
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
};

const removeTodo = async (req, res) => {
  const id = req.params.id;

  const result = await Todos.destroy({ where: { id: id } });
  if (result) {
    res.status(200).send("Todo is deleted !");
  } else {
    res.status(404).json({ message: "No such ID exist" });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const result = await Todos.update(req.body, { where: { id: id } });
  if (result) {
    res.status(200).json({ result });
  } else {
    res.status(404).json({ message: "No such ID exist" });
  }
};

module.exports = {
  getTodos,
  getTodosById,
  addTodo,
  removeTodo,
  updateTodo,
};
