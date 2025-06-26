import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-green-50 px-6 md:px-16 items-center">
      
      {/* Left: Swiper Image */}
      <div className="w-full h-[300px] md:h-[500px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="h-full rounded-lg shadow-lg"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right: Text */}
      <div className="mt-10 md:mt-0 md:pl-12 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">SEA Catering</h1>
        <p className="text-xl text-green-600 mt-2 font-medium">Healthy Meals, Anytime, Anywhere</p>
        <p className="mt-6 text-lg text-slate-700 max-w-lg">
          SEA Catering menghadirkan layanan makanan sehat yang bisa dikustomisasi, dengan pengiriman ke seluruh Indonesia. Praktis, sehat, dan lezat — semua dalam satu layanan!
        </p>
        <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
};

export default Hero;


