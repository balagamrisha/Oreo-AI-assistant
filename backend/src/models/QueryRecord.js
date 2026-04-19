import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
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

export default mongoose.model("QueryRecord", querySchema);