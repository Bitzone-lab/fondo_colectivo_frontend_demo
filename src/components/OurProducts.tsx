import LandingPageDataContext from "@/contexts/LandingPageDataContext";
import { useContext } from "react";

export default function OurProducts() {
  const data = useContext(LandingPageDataContext);

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">{data.our_products_title}</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          {data.out_products_info}
        </p>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/z4Dlc8PH5fg?si=U8iztm98r3vzfWZc&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        className="mx-auto mb-8 w-auto md:w-[560px] h-auto md:h-[315px] rounded-lg shadow-lg hidden"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card-container">
          <h3 className="text-xl font-semibold mb-4 text-corporate-700">
            {data.our_products_item_1_title}
          </h3>
          <p className="text-gray-600 mb-4">{data.our_products_item_1_info}</p>
          <a
            href="/productos/fondos-colectivos"
            className="text-corporate-600 hover:text-corporate-700 font-medium"
          >
            Conocer más →
          </a>
        </div>
        <div className="card-container">
          <h3 className="text-xl font-semibold mb-4 text-corporate-700">
            {data.our_products_item_2_title}
          </h3>
          <p className="text-gray-600 mb-4">{data.our_products_item_2_info}</p>
          <a
            href="/productos/fondos-colectivos"
            className="text-corporate-600 hover:text-corporate-700 font-medium"
          >
            Conocer más →
          </a>
        </div>
        <div className="card-container">
          <h3 className="text-xl font-semibold mb-4 text-corporate-700">
            {data.our_products_item_3_title}
          </h3>
          <p className="text-gray-600 mb-4">{data.our_products_item_3_info}</p>
          <a
            href="/productos/fondos-colectivos"
            className="text-corporate-600 hover:text-corporate-700 font-medium"
          >
            Conocer más →
          </a>
        </div>
      </div>
    </section>
  );
}
