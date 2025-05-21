
const Testimonials = () => {
  const testimonials = [
    {
      name: "María Rodríguez",
      title: "Emprendedora",
      quote: "Los fondos colectivos me ayudaron a financiar mi negocio cuando los bancos me rechazaron. El proceso fue muy sencillo y la asesoría excelente.",
    },
    {
      name: "Carlos Mendoza",
      title: "Dueño de Pyme",
      quote: "Gracias a los fondos colectivos pude expandir mi negocio adquiriendo nueva maquinaria. Las cuotas se ajustaron perfectamente a mi presupuesto.",
    },
    {
      name: "Ana Gómez",
      title: "Profesional Independiente",
      quote: "Por fin pude comprar mi departamento con un plan que se adaptó a mis posibilidades. El acompañamiento durante todo el proceso fue clave.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros asociados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Miles de personas ya han cumplido sus sueños con nuestros fondos colectivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-corporate-500 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              </div>
              <div>
                <p className="font-semibold text-corporate-700">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
