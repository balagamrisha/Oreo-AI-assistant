import mongoose from "mongoose";

const queryRecordSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    response: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const QueryRecord = mongoose.model("QueryRecord", queryRecordSchema);

export default QueryRecord;