const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const { protect, adminOnly } = require('../middleware/authMiddleware');


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

router.get('/me', protect, async (req, res) => {
  try {
    const subs = await Subscription.find({ user: req.user.id });
    res.status(200).json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/me', protect, async (req, res) => {
  try {
    const subs = await Subscription.find({ user: req.user.id });
    res.status(200).json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/pause/:id', protect, async (req, res) => {
  const { start, end } = req.body;
  try {
    const sub = await Subscription.findById(req.params.id);
    if (!sub || sub.user.toString() !== req.user.id)
      return res.status(404).json({ message: "Subscription tidak ditemukan" });

    sub.isPaused = true;
    sub.pausePeriod = { start, end };
    await sub.save();

    res.json({ message: "Subscription berhasil di-pause", data: sub });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/cancel/:id', protect, async (req, res) => {
  try {
    const sub = await Subscription.findById(req.params.id);
    if (!sub || sub.user.toString() !== req.user.id)
      return res.status(404).json({ message: "Subscription tidak ditemukan" });

    sub.isCancelled = true;
    await sub.save();

    res.json({ message: "Subscription berhasil dibatalkan", data: sub });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;


