import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import LandingPageDataContext from "@/contexts/LandingPageDataContext";
import useStrapiGet from "@/hooks/use-strapi-get";
import DB from "@/types/db";
import { useContext } from "react";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const { question_title, question_info } = useContext(LandingPageDataContext);
  const { response } = useStrapiGet<DB.Question[]>(
    "/api/questions?pagination[pageSize]=5",
    []
  );
  const questions = response?.data || [];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {question_title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {question_info}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-6 text-center">
            <Button variant="link" className="text-corporate-600" asChild>
              <Link to="/preguntas-frecuentes">Ver todas las preguntas →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
