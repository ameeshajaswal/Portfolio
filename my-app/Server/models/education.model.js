import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description: String
});

export default mongoose.model("Education", EducationSchema);
