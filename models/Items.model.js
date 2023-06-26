const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  stock: {
    type: Number
  },
  imageUrl: {
    type: String
  },
  category: {
    type: String
  },
  color: {
    type: String
  },

  user: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

module.exports = model("Item", itemSchema);