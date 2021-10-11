import { Router } from 'express';
import {
  addTodo,
  getTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from '../controllers/todos';
import bodyParser from 'body-parser';

const router = Router();
const jsonParser = bodyParser.json();
router.get('/api/v1/todos', getTodos);

router.get('/api/v1/todo/:id', getTodo);

router.post('/api/v1/add-todo', jsonParser, addTodo);

router.put('/api/v1/update-todo/:id', jsonParser, updateTodo);

router.delete('/api/v1/remove-todo/:id', jsonParser, removeTodo);

export default router;
