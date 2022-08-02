const express = require("express");
const router = express.Router();
const person = require("../services/person");

/* GET ALL */

router.get("/", async (req, res, next) => {
  try {
    res.json(await person.getAll());
  } catch (error) {
    console.error("Error getting person", error.message);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.json(await person.create(req.body));
  } catch (error) {
    console.error("Error while creating person", error.message);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    res.json(await person.update(req.params.id, req.body));
  } catch (error) {
    console.error("Error while updating person", error.message);
    next();
  }
});

module.exports = router;
