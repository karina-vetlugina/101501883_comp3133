const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");

// 4) Return all restaurant details (all columns)
router.get("/", async (req, res) => {
  try {
    const sortBy = req.query.sortBy;

    // 6) If sortBy exists, return selected columns and sort
    if (sortBy === "ASC" || sortBy === "DESC") {
      const sortOrder = sortBy === "ASC" ? 1 : -1;

      const results = await Restaurant.find(
        {},
        {
          _id: 1,
          cuisine: 1,
          name: 1,
          city: 1,
          restaurant_id: 1,
        }
      ).sort({ restaurant_id: sortOrder });

      const mappedResults = results.map((r) => ({
        id: r._id,
        cuisines: r.cuisine,
        name: r.name,
        city: r.city,
        resturant_id: r.restaurant_id,
      }));

      return res.json(mappedResults);
    }

    // Normal: return all columns
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5) Return restaurants by cuisine (all columns)
router.get("/cuisine/:cuisineName", async (req, res) => {
  try {
    const cuisineName = req.params.cuisineName;

    const results = await Restaurant.find({ cuisine: cuisineName });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 7) Return Delicatessen restaurants where city != Brooklyn
// Select cuisines, name, city but exclude id
// Sort by name ASC
router.get("/Delicatessen", async (req, res) => {
  try {
    const results = await Restaurant.find(
      {
        cuisine: "Delicatessen",
        city: { $ne: "Brooklyn" },
      },
      {
        _id: 0,
        cuisine: 1,
        name: 1,
        city: 1,
      }
    ).sort({ name: 1 });

    const mappedResults = results.map((r) => ({
      cuisines: r.cuisine,
      name: r.name,
      city: r.city,
    }));

    res.json(mappedResults);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;