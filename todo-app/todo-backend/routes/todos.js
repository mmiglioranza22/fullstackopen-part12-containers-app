const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();

/* DELETE todo. */
router.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await Todo.findById(id)
  console.log({id, todo})
  if (!todo) res.sendStatus(404); 
  res.status(200).json(todo)
});

/* PUT todo. */
router.put('/:id', async (req, res) => {
  const { id } = req.params
  console.log(req.body)
  const todo = await Todo.findByIdAndUpdate(id, {...req.body}, {new: true})
  if (!todo) res.sendStatus(404); 
  res.status(200).json(todo)
});

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

module.exports = router;
