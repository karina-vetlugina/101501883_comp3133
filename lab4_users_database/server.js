const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Lab 04 Users API Running"));

app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 8081;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas!");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("Mongo error:", err.message));