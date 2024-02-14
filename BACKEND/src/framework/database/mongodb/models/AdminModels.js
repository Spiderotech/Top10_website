import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const admindata = model("admin", adminSchema);
export default admindata;