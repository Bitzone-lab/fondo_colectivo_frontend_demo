
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-corporate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Quiénes Somos</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-200">
                Somos una empresa administradora de fondos colectivos comprometida con el crecimiento económico de nuestros asociados.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-corporate-700">Nuestra Historia</h2>
                <p className="text-gray-700 mb-4">
                  Fundada en 2023, nacimos con la misión de crear una alternativa financiera accesible y transparente para los peruanos. Nuestro enfoque está en brindar soluciones que permitan a las personas alcanzar sus metas financieras, ya sea adquirir una vivienda, un vehículo o financiar un negocio.
                </p>
                <p className="text-gray-700 mb-4">
                  Estamos en proceso de obtener la licencia de la Superintendencia del Mercado de Valores (SMV) para operar como administradora de fondos colectivos, lo que garantizará a nuestros asociados la seguridad y respaldo de estar regulados por una entidad gubernamental.
                </p>
                <p className="text-gray-700">
                  Nuestro equipo está formado por profesionales con amplia experiencia en el sector financiero, comprometidos con brindar un servicio de excelencia y asesoría personalizada a cada uno de nuestros asociados.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-corporate-700">Nuestros Pilares</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-corporate-600 text-white">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Transparencia</h4>
                      <p className="text-gray-600">
                        Nuestros procesos son claros y auditables, permitiendo a nuestros asociados conocer exactamente cómo funcionan nuestros fondos.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-corporate-600 text-white">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Confianza</h4>
                      <p className="text-gray-600">
                        Trabajamos para ser una institución confiable y segura donde nuestros asociados puedan depositar sus ahorros.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-corporate-600 text-white">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Servicio al Cliente</h4>
                      <p className="text-gray-600">
                        Brindamos una atención personalizada y asesoría constante para que nuestros asociados tomen las mejores decisiones financieras.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-corporate-600 text-white">
                        4
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Innovación</h4>
                      <p className="text-gray-600">
                        Buscamos constantemente mejorar nuestros procesos y servicios para ofrecer la mejor experiencia a nuestros asociados.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Misión y Visión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-corporate-700">Misión</h3>
                <p className="text-gray-700">
                  Brindar soluciones financieras accesibles y transparentes que permitan a nuestros asociados alcanzar sus metas y mejorar su calidad de vida, contribuyendo al desarrollo económico del país.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-corporate-700">Visión</h3>
                <p className="text-gray-700">
                  Ser la administradora de fondos colectivos líder en el mercado peruano, reconocida por su transparencia, solidez y compromiso con el bienestar financiero de sus asociados.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Button className="bg-corporate-600 hover:bg-corporate-700" asChild>
                <Link to="/valores">Conoce Nuestros Valores</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Nuestros Socios Estratégicos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gray-500 text-xl">Logo Socio 1</span>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gray-500 text-xl">Logo Socio 2</span>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gray-500 text-xl">Logo Socio 3</span>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gray-500 text-xl">Logo Socio 4</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
