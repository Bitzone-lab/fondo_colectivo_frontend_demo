
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
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const formSchema = z.object({
  nombreApellido: z.string().min(2, { message: "Nombre y apellido son requeridos" }),
  tipoDocumento: z.string(),
  numeroDocumento: z.string().min(8, { message: "Número de documento inválido" }),
  telefono: z.string().min(6, { message: "Teléfono inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  direccion: z.string().min(5, { message: "Dirección es requerida" }),
  tipoReclamo: z.string(),
  detalle: z.string().min(10, { message: "El detalle debe tener al menos 10 caracteres" }),
  pedido: z.string().min(5, { message: "El pedido es requerido" }),
});

type FormValues = z.infer<typeof formSchema>;

const LibroReclamaciones = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentDate = format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: es });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreApellido: "",
      tipoDocumento: "dni",
      numeroDocumento: "",
      telefono: "",
      email: "",
      direccion: "",
      tipoReclamo: "queja",
      detalle: "",
      pedido: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Reclamo data:", data);
      toast({
        title: "Reclamo registrado",
        description: "Tu reclamo ha sido registrado con éxito. Te contactaremos dentro de los próximos 30 días hábiles.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-corporate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Libro de Reclamaciones</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-200">
                Completa el siguiente formulario para registrar tu queja o reclamo.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6 text-right text-gray-600">
                <p>Fecha: {currentDate}</p>
              </div>

              <div className="bg-corporate-100 p-4 rounded-md mb-8">
                <h3 className="text-lg font-semibold text-corporate-700 mb-2">Información importante:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>La respuesta a tu reclamo será enviada al correo electrónico que registres en este formulario.</li>
                  <li>El plazo máximo de respuesta es de 30 días hábiles, contados desde la fecha de presentación del reclamo.</li>
                  <li>Para cualquier consulta adicional, comunícate con nuestra línea de atención al cliente: 0800-12345.</li>
                </ul>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="p-4 border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold mb-4 text-corporate-700">1. Identificación del Consumidor</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nombreApellido"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre y apellido</FormLabel>
                            <FormControl>
                              <Input placeholder="Nombre completo" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <FormField
                          control={form.control}
                          name="tipoDocumento"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipo de documento</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Tipo" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="dni">DNI</SelectItem>
                                  <SelectItem value="ce">CE</SelectItem>
                                  <SelectItem value="pasaporte">Pasaporte</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="numeroDocumento"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Número</FormLabel>
                              <FormControl>
                                <Input placeholder="Número" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

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
                        name="direccion"
                        render={({ field }) => (
                          <FormItem className="col-span-1 md:col-span-2">
                            <FormLabel>Dirección</FormLabel>
                            <FormControl>
                              <Input placeholder="Dirección completa" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold mb-4 text-corporate-700">2. Detalle del Reclamo</h3>
                    
                    <FormField
                      control={form.control}
                      name="tipoReclamo"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel>Tipo de reclamo</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="queja">Queja (mala atención)</SelectItem>
                              <SelectItem value="reclamo">Reclamo (producto/servicio)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Queja: disconformidad con la atención brindada. Reclamo: disconformidad con el producto o servicio.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="detalle"
                      render={({ field }) => (
                        <FormItem className="mb-6">
                          <FormLabel>Detalle del reclamo</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe detalladamente tu queja o reclamo" 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pedido"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>¿Qué solución esperas?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Indica qué solución o respuesta esperas recibir" 
                              className="min-h-24" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-md">
                    <p>
                      Al enviar este formulario, autorizo el tratamiento de mis datos personales según lo dispuesto 
                      en la Ley N° 29733 - Ley de Protección de Datos Personales y su Reglamento.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-corporate-600 hover:bg-corporate-700"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Reclamo"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LibroReclamaciones;
