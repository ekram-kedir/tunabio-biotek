import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { articles } from "../constants";
import styles from "../style";

const Articles = () => {
  return (
    <section id="articles" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative justify-center items-center`}>
    <h2 className="text-center text-white text-6xl font-bold my-8">Articles</h2>
      <div className="max-w-4xl mx-auto text-center">

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id} className="flex flex-col items-center">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-1/2 h-64 object-cover rounded-lg"
                />
                <div className="flex flex-col m-7">
                  <h3 className="text-xl font-semibold mt-4">{article.title}</h3>
                  <a
                    href={article.link}
                    className="mt-4 bg-blue-gradient text-white py-2 px-6 rounded-lg hover:bg-blue-gradient transition"
                  >
                    Read
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-swiper-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-gradient text-white p-3 rounded-full shadow-lg z-10">
            ❮
          </button>
          <button className="custom-swiper-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-gradient text-white p-3 rounded-full shadow-lg z-10">
            ❯
          </button>

          <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
        </div>
      </div>

      <style>
        {`
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: linear-gradient(
                        157.81deg,
                        #def9fa -43.27%,
                        #bef3f5 -21.24%,
                        #9dedf0 12.19%,
                        #7de7eb 29.82%,
                        #5ce1e6 51.94%,
                        #33bbcf 90.29%
                    );
            opacity: 0.5;
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.3); /* Slightly larger active dot */
            background: blue-gradient(90deg, #1e40af, #2563eb); /* Brighter blue gradient */
          }
        `}
      </style>
    </section>
  );
};

export default Articles;
