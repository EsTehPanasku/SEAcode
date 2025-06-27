const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  plan: { type: String, required: true },
  mealTypes: { type: [String], required: true },
  deliveryDays: { type: [String], required: true },
  allergies: { type: String },
  totalPrice: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

}, { timestamps: true });


module.exports = mongoose.model('Subscription', SubscriptionSchema);

/* import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  plan: { type: String, required: true },
  meals: [String],
  days: [String],
  allergies: String,
  totalPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscription = mongoose.model("Subscription", SubscriptionSchema);
export default Subscription; */
