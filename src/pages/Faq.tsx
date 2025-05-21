
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      category: "Sobre Fondos Colectivos",
      questions: [
        {
          question: "¿Qué son los fondos colectivos?",
          answer: "Los fondos colectivos son un sistema de ahorro programado y autofinanciado que permite a un grupo de personas adquirir bienes o servicios a través de aportes periódicos. Estos fondos son administrados por empresas supervisadas por la Superintendencia del Mercado de Valores (SMV)."
        },
        {
          question: "¿Cómo funcionan los fondos colectivos?",
          answer: "Los fondos colectivos funcionan formando grupos de personas que realizan aportes mensuales a un fondo común. Estos aportes se distribuyen periódicamente mediante sorteos y remates entre los miembros del grupo, permitiendo a cada participante recibir el bien o servicio objeto del contrato en algún momento durante la vigencia del programa."
        },
        {
          question: "¿Cuáles son las ventajas de los fondos colectivos?",
          answer: "Las principales ventajas son: no requieren evaluación crediticia tradicional, ofrecen cuotas fijas durante todo el programa, no aplican intereses como en un préstamo bancario, permiten adquirir bienes o servicios con plazos más largos que los tradicionales, y ofrecen flexibilidad en las formas de adjudicación."
        },
        {
          question: "¿Qué bienes o servicios puedo adquirir?",
          answer: "Dependiendo del programa, puedes adquirir viviendas, terrenos, vehículos, maquinaria para negocios, equipos tecnológicos, o destinar el fondo para proyectos de inversión, ampliaciones de negocio, entre otros."
        },
      ]
    },
    {
      category: "Proceso de Adhesión y Pagos",
      questions: [
        {
          question: "¿Cómo me inscribo en un fondo colectivo?",
          answer: "Para inscribirte, debes contactar a uno de nuestros asesores, quien te explicará los planes disponibles. Luego, deberás completar una solicitud de inscripción, presentar los documentos requeridos, y realizar el pago de la cuota de inscripción y la primera cuota mensual."
        },
        {
          question: "¿Qué documentos necesito para inscribirme?",
          answer: "Generalmente necesitarás documento de identidad, comprobantes de ingresos, comprobantes de domicilio, y dependiendo del bien o servicio, podrían solicitarse documentos adicionales."
        },
        {
          question: "¿Cuáles son los métodos de pago disponibles?",
          answer: "Puedes realizar tus pagos a través de débito automático, transferencias bancarias, depósitos en nuestras cuentas, pagos en línea a través de nuestra web, o directamente en nuestras oficinas."
        },
        {
          question: "¿Qué pasa si me retraso en los pagos?",
          answer: "Los retrasos en los pagos generan penalidades y pueden afectar tu capacidad para participar en los sorteos y remates. En casos de morosidad prolongada, podría resolverse el contrato según los términos establecidos en el mismo."
        },
      ]
    },
    {
      category: "Adjudicaciones",
      questions: [
        {
          question: "¿Cómo funciona el sistema de adjudicación?",
          answer: "Las adjudicaciones se realizan mensualmente mediante dos mecanismos: sorteo y remate. En el sorteo, todos los asociados al día en sus pagos tienen las mismas probabilidades de ser seleccionados. En el remate, los asociados ofrecen pagar anticipadamente un número determinado de cuotas, y se adjudica al que ofrezca el mayor número."
        },
        {
          question: "¿Cuándo se realizan los sorteos y remates?",
          answer: "Las asambleas de adjudicación se realizan mensualmente en fechas predeterminadas que son comunicadas a todos los asociados. Estas son públicas y supervisadas por un notario público."
        },
        {
          question: "¿Puedo elegir entre sorteo y remate?",
          answer: "Sí, puedes participar en ambas modalidades. Si deseas aumentar tus probabilidades de ser adjudicado, puedes participar en los remates ofreciendo un número de cuotas como anticipo."
        },
        {
          question: "¿Qué sucede después de ser adjudicado?",
          answer: "Después de ser adjudicado, deberás presentar las garantías requeridas para respaldar el pago de las cuotas pendientes. Una vez aprobadas las garantías, se procede a la adquisición del bien o servicio según el plan contratado."
        },
      ]
    },
    {
      category: "Garantías y Contratos",
      questions: [
        {
          question: "¿Qué garantías debo presentar al ser adjudicado?",
          answer: "Las garantías varían según el monto del contrato y el bien adquirido. Pueden incluir garantías hipotecarias, prendarias, o la constitución de un fideicomiso. El bien adquirido usualmente queda como garantía principal."
        },
        {
          question: "¿Puedo transferir mi contrato a otra persona?",
          answer: "Sí, existe la posibilidad de ceder tu posición contractual a un tercero, previa evaluación y aprobación de la administradora. El proceso implica ciertos requisitos y costos administrativos."
        },
        {
          question: "¿Qué pasa si quiero retirarme del programa?",
          answer: "Si decides retirarte del programa antes de ser adjudicado, puedes solicitar la resolución de contrato. Se aplicarán las penalidades y descuentos estipulados en el contrato, y se te devolverá el monto correspondiente según los términos acordados."
        },
        {
          question: "¿Puedo modificar el bien o servicio después de firmar el contrato?",
          answer: "En algunos casos es posible modificar el bien o servicio objeto del contrato, siempre que la modificación se ajuste a las políticas de la empresa y esté dentro del mismo rango de valor. Esto podría implicar costos administrativos adicionales."
        },
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-corporate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Preguntas Frecuentes</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-200">
                Encuentra respuestas a las dudas más comunes sobre nuestros fondos colectivos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqs.map((category, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-corporate-700 border-b pb-2">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${index}-item-${faqIndex}`}>
                        <AccordionTrigger className="text-left font-medium text-lg">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          {faq.answer}
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
      <Footer />
    </div>
  );
};

export default Faq;
