import LandingPageDataContext from "@/contexts/LandingPageDataContext";
import { Check } from "lucide-react";
import { useContext } from "react";

const Features = () => {
  const data = useContext(LandingPageDataContext);
  const features = [
    {
      title: data.who_we_are_card_1_title,
      description: data.who_we_are_card_1_info,
    },
    {
      title: data.who_we_are_card_2_title,
      description: data.who_we_are_card_2_info,
    },
    {
      title: data.who_we_are_card_3_title,
      description: data.who_we_are_card_3_info,
    },
    {
      title: data.who_we_are_card_4_title,
      description: data.who_we_are_card_4_info,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {data.who_we_are_title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.who_we_are_info}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-corporate-100 text-corporate-600 mb-6 mx-auto">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
