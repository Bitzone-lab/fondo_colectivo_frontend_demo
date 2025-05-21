
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const faqs = [
    {
      question: "¿Qué son los fondos colectivos?",
      answer: "Los fondos colectivos son un sistema de ahorro programado y autofinanciado que permite a un grupo de personas adquirir bienes o servicios a través de aportes periódicos."
    },
    {
      question: "¿Cómo funciona el sistema de adjudicación?",
      answer: "Las adjudicaciones se realizan mensualmente mediante sorteo y remate. Por sorteo, todos los asociados tienen la misma probabilidad de ser adjudicados. Por remate, los asociados ofrecen pagar anticipadamente un número determinado de cuotas."
    },
    {
      question: "¿Cuánto tiempo dura un programa?",
      answer: "La duración de un programa depende del plan elegido, generalmente van desde 60 hasta 180 meses (5 a 15 años)."
    },
    {
      question: "¿Qué pasa si no puedo seguir pagando las cuotas?",
      answer: "Existen varias opciones como la resolución de contrato, la cesión de posición contractual o la solicitud de licencia. Te recomendamos contactar a un asesor para evaluar tu caso específico."
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestros fondos colectivos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
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
