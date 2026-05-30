const mongoose = require("mongoose");

const appliedJobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AppliedJob", appliedJobSchema);
