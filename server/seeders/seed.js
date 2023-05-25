const db = require("../config/connection");
const { Exercise } = require("../models");
const exerciseSeeds = require("./exerciseSeeds.json");

db.once("open", async () => {
  await Exercise.deleteMany({});
  await Exercise.create(exerciseSeeds);

  console.log("all done!");
  process.exit(0);
});
