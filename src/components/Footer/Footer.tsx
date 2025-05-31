//import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Capacitação em Análise de Dados</h3>
            <p className="text-gray-300">
              Um projeto de extensão universitária dedicado a capacitar microempresas 
              locais em análise de dados para melhores decisões de negócio.
            </p>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:contato@capacitacaodados.edu.br" className="text-gray-300 hover:text-white">
                  contato@capacitacaodados.edu.br
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">(11) 5555-1234</span>
              </div>
            </div>
          </div> */}
          
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div> */}
            
            {/* <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Parceiros:</h4>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-2 rounded">
                  <span className="text-gray-800 font-bold">Associação Comercial</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <span className="text-gray-800 font-bold">SEBRAE</span>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Capacitação em Análise de Dados para Microempresas.</p>
          {/* <p className="mt-2">Universidade Federal de Exemplo - Departamento de Ciência de Dados</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
