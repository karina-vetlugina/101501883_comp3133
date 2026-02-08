const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const restaurantsRoutes = require("./routes/restaurants");

app.get("/", (req, res) => {
  res.send("Lab 03 Restaurant API Running");
});

app.use("/restaurants", restaurantsRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });