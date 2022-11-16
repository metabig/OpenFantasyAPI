import mongoose from "mongoose";

const TutorialSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    published: String,
  },
  { timestamps: true }
);

TutorialSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model("tutorial", TutorialSchema);
