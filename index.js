const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

// Port
const PORT = process.env.PORT || 3000;

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

app.get("/", (req, res) => {
  res.send("Hello Bobby");
});

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://<username>:<password>@clusterbdcrudapi.ncxxo.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBDCRUDAPI"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    //console.log("Error connecting to Mongoose");
  });
