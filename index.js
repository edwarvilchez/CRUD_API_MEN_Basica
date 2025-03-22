const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Bobby");
});

app.post('api/products/', (req, res) => {
    res.send('Data added successfully');
});

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://edwarvilchez1977:b3eYhyBSRRux4QaD@clusterbdcrudapi.ncxxo.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBDCRUDAPI"
  )
  .then(() => {
    console.log("Mongoose is connected!!!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Error connecting to Mongoose");
  });
