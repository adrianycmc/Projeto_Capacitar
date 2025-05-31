import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-700">
              Capacitação em Análise de Dados
            </h1>
          </div>

          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">
              Início
            </a>
            <a href="#videos" className="text-gray-700 hover:text-blue-600 font-medium">
              Vídeos
            </a>
            <a href="#slides" className="text-gray-700 hover:text-blue-600 font-medium">
              Materiais
            </a>
            <a href="#ferramentas" className="text-gray-700 hover:text-blue-600 font-medium">
              Ferramentas
            </a>
            <a href="#workshops" className="text-gray-700 hover:text-blue-600 font-medium">
              Workshops
            </a>
            <a href="#forum" className="text-gray-700 hover:text-blue-600 font-medium">
              Fórum
            </a>
          </nav>

          {/* Botão do menu mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#videos" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Vídeos
              </a>
              <a 
                href="#Materiais" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Materiais
              </a>
              <a 
                href="#ferramentas" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ferramentas
              </a>
              <a 
                href="#workshops" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Workshops
              </a>
              <a 
                href="#forum" 
                className="text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fórum
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
