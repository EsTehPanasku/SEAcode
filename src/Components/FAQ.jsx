import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana cara berlangganan meal plan?",
    answer:
      "Kamu bisa menuju halaman Subscription dan memilih paket yang sesuai. Setelah itu, lengkapi form dan lakukan pembayaran.",
  },
  {
    question: "Apakah saya bisa memilih menu sendiri?",
    answer:
      "Tentu! Kami menyediakan fitur kustomisasi menu saat kamu berlangganan, agar sesuai dengan preferensimu.",
  },
  {
    question: "Kapan makanan akan dikirim?",
    answer:
      "Pengiriman dilakukan setiap pagi antara pukul 06.00 - 09.00, tergantung area tempat tinggalmu.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-green-100 py-16 px-6">
      <h2 className="text-5xl font-bold text-center text-green-800 mb-10">
        FAQ
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-green-800 font-medium text-lg focus:outline-none"
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`px-6 pb-4 text-slate-700 text-sm transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 
