const express = require("express");
const app = express();
const Transaction = require("./models/transaction.model.js");
const mongoose = require("mongoose");
const transactionRoute = require("./routes/transaction.route.js");
require("dotenv").config(); // Load environment variables

app.use(express.json());

// FORMURLENCODED SUPPORT
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/transactions", transactionRoute);

app.get("/", function (req, res) {
  res.send("SERVER RUNNING SUCCESSFULLY!");
});

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => console.log("Failed to connect to database!"));
