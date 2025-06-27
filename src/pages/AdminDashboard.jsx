import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  CalendarRange,
  DollarSign,
  RefreshCcw,
  TrendingUp,
} from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");

  const fetchStats = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Unauthorized");

    try {
      const res = await fetch(
        `http://localhost:5000/api/admin/stats?start=${startDate}&end=${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error(err);
      alert("Gagal mengambil data statistik");
    }
  };

  useEffect(() => {
    fetchStats();
  }, [startDate, endDate]);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6 text-green-700 flex items-center gap-2">
          <BarChart2 className="w-6 h-6" />
          Admin Dashboard
        </h1>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <CalendarRange className="text-green-600" />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex items-center gap-2">
            <CalendarRange className="text-green-600" />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border px-3 py-2 rounded-md"
            />
          </div>
        </div>

        {stats ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow rounded-xl p-6 border-t-4 border-green-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <CalendarRange className="text-green-600" />
                <h2 className="text-lg font-semibold">Langganan Baru</h2>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {stats.newSubscriptions}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow rounded-xl p-6 border-t-4 border-yellow-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-yellow-600" />
                <h2 className="text-lg font-semibold">MRR</h2>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                Rp{stats.mrr.toLocaleString("id-ID")}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow rounded-xl p-6 border-t-4 border-blue-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <RefreshCcw className="text-blue-600" />
                <h2 className="text-lg font-semibold">Reaktivasi</h2>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {stats.reactivations}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow rounded-xl p-6 border-t-4 border-purple-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-purple-600" />
                <h2 className="text-lg font-semibold">Pertumbuhan</h2>
              </div>
              <p className="text-2xl font-bold text-gray-800">
                {stats.totalSubscriptions}
              </p>
            </motion.div>
          </div>
        ) : (
          <p className="text-gray-600">Mengambil data statistik...</p>
        )}
      </motion.div>
    </section>
  );
};

export default AdminDashboard;
