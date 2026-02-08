const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();

async function importSeedData() {
  try {
    console.log("===== SEED IMPORT STARTED =====");

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing. Check your .env file.");
    }

    console.log("Connecting to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected successfully!");

    console.log("Reading restaurants.json...");
    const fileContent = fs.readFileSync("restaurants.json", "utf-8").trim();

    if (!fileContent) {
      throw new Error("restaurants.json is empty.");
    }

    console.log("Parsing JSON file...");
    const restaurants = JSON.parse(fileContent);

    if (!Array.isArray(restaurants)) {
      throw new Error("restaurants.json must contain an array of restaurant objects.");
    }

    console.log(`Loaded ${restaurants.length} restaurants from file.`);

    console.log("Inserting data into Restaurants collection...");
    const collection = mongoose.connection.collection("Restaurants");
    await collection.insertMany(restaurants);

    console.log("===== IMPORT SUCCESSFUL =====");

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("===== IMPORT FAILED =====");
    console.error(err);
    process.exit(1);
  }
}

importSeedData();