const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The name of product is required"],
    },
    quantity: {
      type: Number,
      required: [true, "The quantity of product is required"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "The price of product is required"],
    },
    description:{
        type: String,
        required: [true, "The description of product is required"]
    },
    category:{
        type: String,
        required: [true, "The category of product is required"]
    },
    image:{
        type: String,
        required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
