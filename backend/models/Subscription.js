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
  isPaused: { type: Boolean, default: false },
  pausePeriod: {
  start: Date,
  end: Date,
},
isCancelled: { type: Boolean, default: false },

}, { timestamps: true });


module.exports = mongoose.model('Subscription', SubscriptionSchema);