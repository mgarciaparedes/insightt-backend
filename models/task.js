const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  createdBy: { type: String, require: true },
  points: { type: String, require: true },
  status: { type: String, require: true },
  description: { type: String, require: true },
  notes: { type: String, require: true },
});

module.exports = model("task", UserSchema);
