import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import healthy from "../assets/healthy.jpg";
import muscle from "../assets/muscle.jpg";
import vegetarian from "../assets/vegetarian.jpg";

const mealPlans = [
   {
    name: "Diet Plan",
    price: "Rp 30.000 / minggu",
    description: "Menu diet bergizi lengkap untuk para pemula.",
    image: vegetarian,
    details:
      "Diet Plan",
  },
   {
    name: "Protein Plan",
    price: "Rp 40.000 / minggu",
    description: "Menu yang mengutamakan gizi gizi dari protein.",
    image: vegetarian,
    details:
      "Protein Plan",
  },
   {
    name: "Royal Plan",
    price: "Rp 60.000 / minggu",
    description: "Paket dengan segala gizi seimbang didalamnya.",
    image: vegetarian,
    details:
      "Dikembangkan oleh ahli gizi dengan bahan nabati yang segar dan beragam. Cocok untuk kamu yang menjalani pola makan vegetarian.",
  },
  {
    name: "Healthy Lite",
    price: "Rp 300.000 / minggu",
    description: "Paket rendah kalori untuk membantu menjaga berat badan.",
    image: healthy,
    details:
      "Menu ini difokuskan untuk kamu yang ingin menjaga berat badan dengan asupan rendah kalori tapi tetap bernutrisi dan nikmat. Cocok untuk gaya hidup aktif dan sehat.",
  },
  {
    name: "Muscle Gain",
    price: "Rp 450.000 / minggu",
    description: "Protein tinggi untuk mendukung pembentukan otot.",
    image: muscle,
    details:
      "Dibuat khusus bagi kamu yang aktif berolahraga atau sedang dalam masa pembentukan otot. Protein tinggi dan karbohidrat seimbang.",
  },
  {
    name: "Vegetarian Vital",
    price: "Rp 350.000 / minggu",
    description: "Menu vegetarian bergizi lengkap dan seimbang.",
    image: vegetarian,
    details:
      "Dikembangkan oleh ahli gizi dengan bahan nabati yang segar dan beragam. Cocok untuk kamu yang menjalani pola makan vegetarian.",
  },
];

const MealPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="py-16 px-6 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Paket Meal Plan Kami
      </h2>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {mealPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer"
            whileHover={{ y: -10, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={plan.image}
              alt={plan.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">
              {plan.name}
            </h3>
            <p className="text-green-600 mt-1 font-medium">{plan.price}</p>
            <p className="mt-2 text-slate-700">{plan.description}</p>
            <button
              onClick={() => setSelectedPlan(plan)}
              className="mt-4 text-green-600 font-medium hover:underline"
            >
              Lihat Detail
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlan(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-md mx-auto relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-green-700">
                {selectedPlan.name}
              </h3>
              <p className="text-sm text-green-600 mb-2">
                {selectedPlan.price}
              </p>
              <p className="text-slate-700 mb-4">{selectedPlan.details}</p>
              <button
                onClick={() => setSelectedPlan(null)}
                className="text-green-600 hover:underline"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MealPlans;
