const pool = require("../../db");
const queries = require("./queries");

const getTodos = async (req, res) => {
  pool.query(queries.getTodos, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const getTodosById = async (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getTodosByID, [id], (err, results) => {
    if (err) {
      res.status(400).send("No such ID exists");
    }
    res.status(200).json(results.rows);
  });
};

const addTodo = async (req, res) => {
  const { id, text, iscompleted } = req.body;
  pool.query(queries.checkIdExists, [id], (err, results) => {
    if (results.rows.length) {
      res.send("Id already exists");
    }
    pool.query(queries.addTodo, [id, text, iscompleted], (err, result) => {
      if (err) throw err;
      res.status(201).send("Todo created successfully");
    });
  });
};

const removeTodo = async (req, res) => {
  const id = req.params.id;
  pool.query(queries.checkIdExists, [id], (err, results) => {
    if (results.rows.length) {
      pool.query(queries.removetoDo, [id], (err, result) => {
        if (err) throw err;
        res.status(200).send("Todo deleted Successfully");
      });
    } else {
      res.status(401).send("No such ID exists");
    }
  });
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { text, iscompleted } = req.body;
  pool.query(queries.checkIdExists, [id], (err, results) => {
    if (results.rows.length) {
      pool.query(queries.updateTodo, [id, text, iscompleted], (err, result) => {
        if (err) throw err;
        res.status(201).send("Todo updated successfully");
      });
    } else {
      res.status(400).send("Id does not exists");
    }
  });
};

module.exports = {
  //   getTodos,
  //   getTodosById,
  //   addTodo,
  //   removeTodo,
  //   updateTodo,
};
