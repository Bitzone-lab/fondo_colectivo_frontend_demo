
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  telefono: z.string().min(6, { message: "Teléfono inválido" }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form data:", data);
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const offices = [
    {
      name: "Oficina Principal",
      address: "Av. Principal 123, San Isidro",
      phone: "(01) 123-4567",
      email: "info@fondoscolectivos.com",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    },
    {
      name: "Oficina Miraflores",
      address: "Calle Secundaria 456, Miraflores",
      phone: "(01) 987-6543",
      email: "miraflores@fondoscolectivos.com",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-corporate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contáctanos</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-200">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros y un asesor te atenderá a la brevedad.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-corporate-700">Envíanos un mensaje</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="Teléfono de contacto" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mensaje"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="¿En qué podemos ayudarte?" 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-corporate-600 hover:bg-corporate-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                </Form>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 text-corporate-700">Nuestras Oficinas</h2>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-lg font-semibold mb-2 text-corporate-700">{office.name}</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Dirección:</strong> {office.address}</p>
                        <p><strong>Teléfono:</strong> {office.phone}</p>
                        <p><strong>Email:</strong> {office.email}</p>
                        <p><strong>Horario:</strong> {office.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-corporate-700">Canales de Atención</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>Línea de Atención al Cliente:</strong> 0800-12345</li>
                    <li><strong>WhatsApp:</strong> +51 999 888 777</li>
                    <li><strong>Email General:</strong> info@fondoscolectivos.com</li>
                    <li><strong>Horario de Atención:</strong> Lunes a Viernes de 9am a 6pm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
