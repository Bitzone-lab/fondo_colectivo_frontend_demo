
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Sistema Transparente",
      description: "Nuestros procesos de adjudicación son claros y auditados por la SMV."
    },
    {
      title: "Atención Personalizada",
      description: "Te acompañamos durante todo el proceso para encontrar el plan que se ajuste a tus necesidades."
    },
    {
      title: "Flexibilidad",
      description: "Diferentes plazos y cuotas para que puedas elegir la opción que mejor se adapte a tu presupuesto."
    },
    {
      title: "Seguridad",
      description: "Regulados por la Superintendencia del Mercado de Valores (SMV)."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una empresa comprometida con el bienestar financiero de nuestros asociados y trabajamos para ofrecerte los mejores productos y servicios.
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
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
