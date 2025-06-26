import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Budi",
    message: "Contoh aja bang :)",
    rating: 5,
  },
  {
    name: "Badi",
    message: "Gak tau pen tulis apa",
    rating: 4,
  },
  {
    name: "Bodi",
    message: "Begitulah",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white via-emerald-50 to-green-100">
      <h2 className="text-5xl font-bold text-center text-green-700 mb-10">
        Testimoni
      </h2>
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-green-50 rounded-xl shadow-md text-center">
                <p className="text-xl italic mb-4">"{testi.message}"</p>
                <p className="font-semibold text-green-700">{testi.name}</p>
                <p>{"⭐".repeat(testi.rating)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
 