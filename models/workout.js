const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: {
      type: Array,
    },
  },
  { toJSON: { virtuals: true } }
);
workoutSchema.virtual("totalDuration").get(function () {
  let totalDuration = 0;
  for (var i = 0; i < this.exercises.length; i++) {
    totalDuration += this.exercises[i].duration;
  }
  return totalDuration;
});
const Workout = mongoose.model("workout", workoutSchema);
module.exports = workout;
