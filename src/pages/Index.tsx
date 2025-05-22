import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FaqSection from "@/components/FaqSection";
import useStrapiGet from "@/hooks/use-strapi-get";
import LandingPageDataContext from "@/contexts/LandingPageDataContext";
import DB from "@/types/db";
import OurProducts from "@/components/OurProducts";

const Index = () => {
  const { response, isLoading } = useStrapiGet<DB.Design>(
    "/api/diseno?populate=hero_background",
    []
  );
  if (isLoading || !response) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Cargando...</p>
      </div>
    );
  }

  return (
    <LandingPageDataContext.Provider value={response.data}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <OurProducts />
          <Testimonials />
          <FaqSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </LandingPageDataContext.Provider>
  );
};

export default Index;
