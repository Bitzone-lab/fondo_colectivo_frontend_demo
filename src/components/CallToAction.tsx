
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-corporate-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comienza a construir tu futuro hoy
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
          Nuestros asesores están listos para ayudarte a encontrar el plan perfecto para ti y responder todas tus dudas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-corporate-700 hover:bg-gray-100" size="lg" asChild>
            <Link to="/contacto">Contáctanos</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
            <Link to="/simulador">Simula tu Plan</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
