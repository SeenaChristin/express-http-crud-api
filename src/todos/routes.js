const { Router } = require("express");
const controller = require("./controller");
const router = Router();
const validation = require("../../Middlewares/validationMiddleawre");
const todoSchema = require("../../validations");

router.get("/", controller.getTodos);
router.post("/", validation(todoSchema), controller.addTodo);

router.get("/:id", controller.getTodosById);
router.put("/:id", validation(todoSchema), controller.updateTodo);
router.delete("/:id", controller.removeTodo);

module.exports = router;
