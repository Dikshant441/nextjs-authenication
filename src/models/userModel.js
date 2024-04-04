
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter the username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter emain address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "enter your password"],
    unique: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiey : Date,

});

const User = mongoose.models.users || mongoose.model("user", userSchema);

export default User;
