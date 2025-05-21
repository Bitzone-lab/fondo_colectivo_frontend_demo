
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <section className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestros Productos</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Ofrecemos distintos programas para que puedas elegir el que mejor se adapte a tus necesidades y posibilidades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-container">
              <h3 className="text-xl font-semibold mb-4 text-corporate-700">Fondos para Vivienda</h3>
              <p className="text-gray-600 mb-4">
                Adquiere tu casa o departamento con nuestro programa de fondos colectivos para vivienda.
              </p>
              <a 
                href="/productos/fondos-colectivos"
                className="text-corporate-600 hover:text-corporate-700 font-medium"
              >
                Conocer más →
              </a>
            </div>
            <div className="card-container">
              <h3 className="text-xl font-semibold mb-4 text-corporate-700">Fondos para Vehículos</h3>
              <p className="text-gray-600 mb-4">
                Obtén el auto que siempre has querido con nuestros planes de fondos colectivos vehiculares.
              </p>
              <a 
                href="/productos/fondos-colectivos"
                className="text-corporate-600 hover:text-corporate-700 font-medium"
              >
                Conocer más →
              </a>
            </div>
            <div className="card-container">
              <h3 className="text-xl font-semibold mb-4 text-corporate-700">Fondos para Negocios</h3>
              <p className="text-gray-600 mb-4">
                Financia la expansión de tu negocio o emprende uno nuevo con nuestros fondos colectivos empresariales.
              </p>
              <a 
                href="/productos/fondos-colectivos"
                className="text-corporate-600 hover:text-corporate-700 font-medium"
              >
                Conocer más →
              </a>
            </div>
          </div>
        </section>
        <Testimonials />
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
