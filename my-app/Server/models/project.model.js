import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description: String
});

export default mongoose.model("Project", ProjectSchema);
