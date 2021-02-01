const {Router} = require('express');
const router = Router();
const Todo = require('./model');

router.get('/get_todos', async(req, res)=> {
  const todo = await Todo.find();
  console.log(todo);
})




module.exports = router