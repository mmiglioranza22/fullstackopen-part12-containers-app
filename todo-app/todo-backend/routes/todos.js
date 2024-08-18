const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const redis = require("../redis")

/* DELETE todo. */
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await Todo.findByIdAndDelete(id)
  if (!todo) res.sendStatus(404); 
  res.status(200).json(todo)

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
  if (todo) {
    const value = await redis.getAsync('added_todos')
    const add = await redis.setAsync("added_todos", Number(value) + 1)

    console.log({value, add})

  }
  res.send(todo);
});

module.exports = router;
