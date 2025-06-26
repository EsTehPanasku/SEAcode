import { useState } from "react";
import img1 from "../assets/feature1.jpg";
import img2 from "../assets/feature2.jpg";
import img3 from "../assets/feature3.jpg";

const featureData = [
  {
    title: "Kustomisasi Menu",
    short: "Atur sendiri menu makanan sesuai kebutuhanmu.",
    detail:
      "Kami menyediakan opsi kustomisasi menu yang fleksibel untuk mendukung kebutuhan diet, preferensi rasa, alergi makanan, dan banyak lagi.",
    image: img1,
  },
  {
    title: "Pengiriman Nasional",
    short: "Layanan kami menjangkau seluruh kota besar di Indonesia.",
    detail:
      "Dengan jaringan logistik yang luas, SEA Catering dapat mengantarkan makanan sehat ke rumahmu di hampir semua kota besar di Indonesia, setiap hari kerja.",
    image: img2,
  },
  {
    title: "Informasi Gizi Lengkap",
    short: "Setiap makanan dilengkapi info kalori & nutrisi.",
    detail:
      "Kamu bisa melihat detail kandungan gizi dari setiap menu seperti jumlah kalori, protein, lemak, karbohidrat, hingga kandungan mikronutrien. Cocok untuk pelaku diet dan fitness enthusiast.",
    image: img3,
  },
];

const Features = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetail = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Layanan Unggulan Kami
      </h2>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="relative border rounded-xl p-6 pt-20 shadow-md bg-green-50 hover:shadow-lg transition duration-300 flex flex-col items-center"
          >
            {/* Gambar bulat */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover -mt-20 bg-white"
            />

            {/* Konten */}
            <h3 className="text-xl font-semibold text-green-800 text-center mt-4">
              {feature.title}
            </h3>
            <p className="mt-2 text-slate-700 text-center">{feature.short}</p>

            {/* Transisi Konten Detail */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-slate-600 text-center">{feature.detail}</p>
            </div>

            <button
              onClick={() => toggleDetail(index)}
              className="mt-4 text-green-600 font-medium hover:underline transition duration-200"
            >
              {openIndex === index ? "Tutup Detail" : "Lihat Detail"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
