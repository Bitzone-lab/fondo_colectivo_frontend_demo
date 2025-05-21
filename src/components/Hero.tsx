
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Cumple tus sueños con Fondos Colectivos
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Somos una administradora de fondos colectivos comprometida con ayudarte a alcanzar tus metas financieras.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent-500 hover:bg-accent-600 text-white" size="lg" asChild>
                <Link to="/productos/fondos-colectivos">Conoce Nuestros Productos</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
                <Link to="/simulador">Simula tu Plan</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-corporate-500/50 to-accent-500/50 rounded-lg blur"></div>
              <div className="relative bg-corporate-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-semibold mb-4">¿Qué son los Fondos Colectivos?</h3>
                <p className="mb-4">
                  Los fondos colectivos son un sistema de ahorro programado y autofinanciado que permite 
                  a un grupo de personas adquirir bienes o servicios a través de aportes periódicos.
                </p>
                <Button variant="link" className="text-corporate-200 hover:text-white p-0" asChild>
                  <Link to="/productos/fondos-colectivos">Conoce más →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-600/20 to-corporate-900/20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
