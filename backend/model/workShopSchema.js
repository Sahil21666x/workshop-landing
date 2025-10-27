import mongoose from "mongoose";
//  Workshop Schema
const workshopSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  duration: String,
  time: String,
  platform: String,
  totalSeats: Number,
  seatsAvailable: Number,
  earlyBirdPrice: Number,
  standardPrice: Number,
});

//  Registration Schema
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  registrationId: String,
  createdAt: { type: Date, default: Date.now },
});

//  Waitlist Schema
const waitlistSchema = new mongoose.Schema({
  name: String,
  email: String,
  waitlistId: String,
  createdAt: { type: Date, default: Date.now },
});

export const Workshop = mongoose.model("Workshop", workshopSchema);
export const Registration = mongoose.model("Registration", registrationSchema);
export const Waitlist = mongoose.model("Waitlist", waitlistSchema);


