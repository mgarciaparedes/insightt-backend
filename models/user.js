const { Schema, model} = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = Schema({
  name: {
      type: String,
      require: true
  },
  email: {
      type: String,
      require: true,
      unique: true
  },
  password: {
      type: String,
      require: true
  }
});

UserSchema.pre('save', async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  });

module.exports = model('user', UserSchema);