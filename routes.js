const {Router} = require('express');
const router = Router();
const Todo = require('./model');

router.get('/', async(req, res)=> {
  const todo = await Todo.find();
  res.status(200).json({todo})
})

router.post('/', async (req, res)=> {
  const {todo} = req.body;
  const todoz = await Todo.create({todo});
  res.status(200).json({todoz})
})

router.post('/:id', async (req, res)=> {
  const {todo} = req.body;
  const todoz = await Todo.findByIdAndUpdate({_id: req.params.id}, {todo}, {new: true});
  res.status(200).json({todoz})
})

router.delete('/:id', async (req, res)=> {
  const {todo} = req.body;
  const todoz = await Todo.findByIdAndDelete({_id: req.params.id}, {todo});
  res.status(200).json({todoz})
})

module.exports = router