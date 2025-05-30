import { Button } from "@/components/ui/button";
import LandingPageDataContext from "@/contexts/LandingPageDataContext";
import { API_URL } from "@/lib/base";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { hero_title, hero_slogan, hero_background } = useContext(
    LandingPageDataContext
  );

  return (
    <section className="hero-section">
      <div>
        <img
          src={hero_background?.url}
          alt={hero_background?.alternativeText}
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-corporate-600/20 to-corporate-900/20 pointer-events-none z-10"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 justify-center relative z-20">
        <div className="md:w-1/2 md:pr-12 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {hero_title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white">{hero_slogan}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="bg-accent-500 hover:bg-accent-600 text-white"
              size="lg"
              asChild
            >
              <Link to="/productos/fondos-colectivos">
                Conoce Nuestros Productos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
