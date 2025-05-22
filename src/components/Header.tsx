import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-corporate-700">
                Fondos Colectivos
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600"
            >
              Inicio
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-corporate-600">
                  Nosotros <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/quienes-somos" className="w-full">
                    Quiénes Somos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/mision-vision" className="w-full">
                    Misión y Visión
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/valores" className="w-full">
                    Valores
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/equipo" className="w-full">
                    Nuestro Equipo
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-corporate-600">
                  Productos <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/productos/fondos-colectivos" className="w-full">
                    Fondos Colectivos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/productos/servicios" className="w-full">
                    Servicios
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/productos/promociones" className="w-full">
                    Promociones
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-corporate-600">
                  Información <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/info/contratos" className="w-full">
                    Modelos Contractuales
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/info/tarifarios" className="w-full">
                    Tarifarios
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/info/beneficios" className="w-full">
                    Beneficios y Riesgos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/info/pagos" className="w-full">
                    Canales de Pago
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/info/politicas" className="w-full">
                    Políticas de Privacidad
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/info/derechos-arco" className="w-full">
                    Derechos ARCO
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/preguntas-frecuentes"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600"
            >
              FAQ
            </Link>

            <Link
              to="/contacto"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600"
            >
              Contacto
            </Link>

            <Link
              to="/libro-reclamaciones"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600"
            >
              Libro de Reclamaciones
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              variant="default"
              className="bg-corporate-600 hover:bg-corporate-700"
              asChild
            >
              <Link to="https://asociado.example.com" target="_blank">
                Portal del Asociado
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-corporate-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600 rounded-md"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <div className="px-3 py-2 text-gray-700">
              <div className="flex justify-between items-center">
                <span>Nosotros</span>
              </div>
              <div className="pl-4 mt-2 flex flex-col space-y-1">
                <Link
                  to="/quienes-somos"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Quiénes Somos
                </Link>
                <Link
                  to="/mision-vision"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Misión y Visión
                </Link>
                <Link
                  to="/valores"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Valores
                </Link>
                <Link
                  to="/equipo"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Nuestro Equipo
                </Link>
              </div>
            </div>
            <div className="px-3 py-2 text-gray-700">
              <div className="flex justify-between items-center">
                <span>Productos</span>
              </div>
              <div className="pl-4 mt-2 flex flex-col space-y-1">
                <Link
                  to="/productos/fondos-colectivos"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Fondos Colectivos
                </Link>
                <Link
                  to="/productos/servicios"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Servicios
                </Link>
                <Link
                  to="/productos/promociones"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Promociones
                </Link>
              </div>
            </div>
            <div className="px-3 py-2 text-gray-700">
              <div className="flex justify-between items-center">
                <span>Información</span>
              </div>
              <div className="pl-4 mt-2 flex flex-col space-y-1">
                <Link
                  to="/info/contratos"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Modelos Contractuales
                </Link>
                <Link
                  to="/info/tarifarios"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Tarifarios
                </Link>
                <Link
                  to="/info/beneficios"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Beneficios y Riesgos
                </Link>
                <Link
                  to="/info/pagos"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Canales de Pago
                </Link>
                <Link
                  to="/info/politicas"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Políticas de Privacidad
                </Link>
                <Link
                  to="/info/derechos-arco"
                  className="py-1 text-gray-600 hover:text-corporate-600"
                  onClick={toggleMenu}
                >
                  Derechos ARCO
                </Link>
              </div>
            </div>
            <Link
              to="/preguntas-frecuentes"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600 rounded-md"
              onClick={toggleMenu}
            >
              Preguntas Frecuentes
            </Link>
            <Link
              to="/contacto"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600 rounded-md"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Link
              to="/libro-reclamaciones"
              className="px-3 py-2 text-gray-700 hover:text-corporate-600 rounded-md"
              onClick={toggleMenu}
            >
              Libro de Reclamaciones
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button
                variant="default"
                className="justify-center bg-corporate-600 hover:bg-corporate-700"
                asChild
              >
                <Link
                  to="https://asociado.example.com"
                  target="_blank"
                  onClick={toggleMenu}
                >
                  Portal del Asociado
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
