const Subscription = require('../models/Subscription');

// Format: /api/admin/stats?start=2024-01-01&end=2024-12-31
exports.getDashboardStats = async (req, res) => {
  try {
    const { start, end } = req.query;
    const startDate = new Date(start);
    const endDate = new Date(end);

    const newSubs = await Subscription.countDocuments({
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const mrr = await Subscription.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$totalPrice" },
        },
      },
    ]);

    const reactivations = await Subscription.countDocuments({
      createdAt: { $gte: startDate, $lte: endDate },
      updatedAt: { $gt: "$createdAt" }, // misalnya: pernah diubah (diaktifkan lagi)
    });

    const totalSubs = await Subscription.countDocuments();

    res.status(200).json({
      newSubscriptions: newSubs,
      monthlyRevenue: mrr[0]?.total || 0,
      reactivations,
      totalSubscriptions: totalSubs,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
