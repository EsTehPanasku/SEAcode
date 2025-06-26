import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const planPrices = {
  Diet: 30000,
  Protein: 40000,
  Royal: 60000,
};

const mealOptions = ["Breakfast", "Lunch", "Dinner"];
const deliveryDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plan: "",
    meals: [],
    days: [],
    allergies: "",
  });

  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (!formData.plan) return setPrice(0);
    const basePrice = planPrices[formData.plan];
    const total = basePrice * formData.meals.length * formData.days.length * 4.3;
    setPrice(total);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e, field) => {
    const value = e.target.value;
    const current = formData[field];
    setFormData({
      ...formData,
      [field]: current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.plan ||
      formData.meals.length === 0 ||
      formData.days.length === 0
    ) {
      alert("Harap isi semua field wajib (*)");
      return;
    }

    const payload = {
      ...formData,
      totalPrice: price,
    };

    try {
      const response = await fetch("http://localhost:5000/api/subscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Formulir berhasil dikirim!");
        setFormData({
          name: "",
          phone: "",
          plan: "",
          meals: [],
          days: [],
          allergies: "",
        });
      } else {
        alert("Terjadi kesalahan saat mengirim data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal menghubungi server.");
    }
  };

  return (
    <section className="min-h-screen bg-green-50 px-4 py-12 flex justify-center items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full relative z-10"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Form Langganan Makanan Sehat
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">*Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">*Nomor Telepon Aktif</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">*Pilih Plan</label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">-- Pilih Plan --</option>
              <option value="Diet">Diet Plan – Rp30.000</option>
              <option value="Protein">Protein Plan – Rp40.000</option>
              <option value="Royal">Royal Plan – Rp60.000</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">*Jenis Makan</label>
            <div className="flex flex-wrap gap-4">
              {mealOptions.map((meal) => (
                <label key={meal} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={meal}
                    checked={formData.meals.includes(meal)}
                    onChange={(e) => handleCheckboxChange(e, "meals")}
                    className="mr-2"
                  />
                  {meal}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">*Hari Pengiriman</label>
            <div className="grid grid-cols-2 gap-2">
              {deliveryDays.map((day) => (
                <label key={day} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={day}
                    checked={formData.days.includes(day)}
                    onChange={(e) => handleCheckboxChange(e, "days")}
                    className="mr-2"
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Alergi (opsional)</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              placeholder="Contoh: kacang, udang, dll."
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="text-xl font-semibold text-green-700 mt-4">
            Total Harga: Rp{price.toLocaleString("id-ID")},00
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Kirim Formulir Langganan
          </button>
        </form>
      </motion.div>

      {/* Motif Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 opacity-40 blur-3xl -z-10" />
    </section>
  );
};
alert("Langganan berhasil dikirim! Kami akan segera menghubungi Anda.");

export default SubscriptionForm;
