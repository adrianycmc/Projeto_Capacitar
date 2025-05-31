import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="inicio" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Capacitação em Análise de Dados para Microempresas
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Ajudamos pequenos negócios a utilizarem dados para tomarem melhores decisões. 
            Nosso projeto de extensão universitária oferece capacitação gratuita para 
            microempreendedores locais que desejam aprimorar seus negócios através da 
            análise de dados.
          </p>
          
          <a 
            href="#workshops" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Inscreva-se
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Aprenda no seu ritmo</h3>
            <p className="text-gray-600">
              Acesse vídeos e materiais práticos para estudar quando e onde quiser.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Workshops online</h3>
            <p className="text-gray-600">
              Participe de sessões ao vivo via Google Meet com instrutores.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ferramentas gratuitas</h3>
            <p className="text-gray-600">
              Conheça e aprenda a utilizar ferramentas gratuitas para análise de dados no seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
