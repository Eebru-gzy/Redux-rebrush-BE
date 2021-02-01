const { Schema, model}  = require("mongoose");

const TodoSchema = new Schema({
  todo: []
})

module.exports = model('todoer', TodoSchema)