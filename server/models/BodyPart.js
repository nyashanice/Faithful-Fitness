const Schema = require("mongoose");

const bodyPartSchema = new Schema({
  categoryId: {
    type: ObjectId,
    default: new ObjectId(),
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = bodyPartSchema;
