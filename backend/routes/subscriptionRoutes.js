const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// @desc    Buat langganan baru (hanya user login)
// @route   POST /api/subscriptions
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const newSub = new Subscription({
      ...req.body,
      user: req.user.id,
    });

    const saved = await newSub.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc    Ambil semua langganan milik user login
// @route   GET /api/subscriptions/me
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const subs = await Subscription.find({ user: req.user.id });
    res.status(200).json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// (opsional ke depannya) @desc    Ambil semua langganan (hanya admin)
// router.get('/', protect, adminOnly, async (req, res) => {
//   const allSubs = await Subscription.find().populate("user", "fullName email");
//   res.status(200).json(allSubs);
// });

module.exports = router;

