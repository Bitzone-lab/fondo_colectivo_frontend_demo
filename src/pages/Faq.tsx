import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useStrapiGet from "@/hooks/use-strapi-get";
import DB from "@/types/db";

const Faq = () => {
  const { response: design, isLoading } = useStrapiGet<DB.Design>(
    "/api/diseno",
    []
  );
  const { response } = useStrapiGet<DB.Question[]>("/api/questions", []);
  const questions = response?.data || [];

  const groupedQuestions = questions.reduce<Record<string, DB.Question[]>>(
    (acc, question) => {
      if (!acc[question.group]) {
        acc[question.group] = [];
      }
      acc[question.group].push(question);
      return acc;
    },
    {}
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {design && !isLoading ? (
        <main className="flex-1">
          <section className="bg-corporate-800 text-white py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                {design.data.question_title}
              </h1>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-gray-200">
                  {design.data.question_info}
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {Object.entries(groupedQuestions).map(([group, questions]) => (
                  <div key={group} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-corporate-700 border-b pb-2">
                      {group}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {questions.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`${group}-item-${faqIndex}`}
                        >
                          <AccordionTrigger className="text-left font-medium text-lg">
                            {faq.title}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            {faq.description}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-gray-600">Cargando...</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Faq;
