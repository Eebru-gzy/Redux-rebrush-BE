const { Schema, model } = require("mongoose");

const TodoSchema = new Schema(
	{
		todo: String,
	},
	{ timestamps: true }
);

module.exports = model("todoer", TodoSchema);
