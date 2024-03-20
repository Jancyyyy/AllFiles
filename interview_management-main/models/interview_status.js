const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(
  mongoose,
);

const interview_statusSchema = mongoose.Schema({
  interview_status_id: {
    type: Number,
    unique: true,
    maxLength: 20,
  },
  interview_status: {
    type: String,
    maxLength: 80,
  },
  created_by: {
    type: String,
    maxLength: 50,
  },
  created_on: {
    type: Date,
  },
  updated_by: {
    type: String,
    maxLength: 50,
    default: "",
  },
  updated_on: {
    type: Date,
    default: "",
  },
  is_deleted: {
    type: Boolean,
  },
  deleted_by: {
    type: String,
    maxLength: 50,
    default: "",
  },
  deleted_on: {
    type: Date,
    default: "",
  },
});

interview_statusSchema.plugin(autoIncrement, {
  inc_field: "interview_status_id",
  start_seq: "9000",
  collection_name: "interview-status-id",
});

module.exports = mongoose.model(
  "interview_status",
  interview_statusSchema,
);
