const express = require("express")
const router = express.Router()
const Workout = require("../models/Workout")

// CREATE workout
router.post("/", async (req, res) => {
  try {
    const workout = await Workout.create(req.body)
    res.json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// GET all workouts
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 })
    res.json(workouts)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// DELETE workout
router.delete("/:id", async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id)
    res.json({ message: "Workout Deleted" })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
