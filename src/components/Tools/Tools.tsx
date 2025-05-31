import { ExternalLink } from 'lucide-react';
import ToolIcon from './ToolIcon';

const Tools = () => {
  // Dados das ferramentas (em produção, estes viriam de uma API ou CMS)
  const tools = [
    {
      id: 1,
      name: "Google Sheets",
      description: "Planilhas online gratuitas para organizar, analisar e visualizar seus dados de negócio.",
      url: "https://sheets.google.com"
    },
    {
      id: 2,
      name: "Google Data Studio",
      description: "Crie dashboards e relatórios interativos para visualizar seus dados de forma profissional.",
      url: "https://datastudio.google.com"
    },
    {
      id: 3,
      name: "Power BI Desktop",
      description: "Ferramenta gratuita da Microsoft para análise de dados e criação de visualizações avançadas.",
      url: "https://powerbi.microsoft.com/desktop/"
    },
    {
      id: 4,
      name: "Canva",
      description: "Crie relatórios visuais e apresentações profissionais para comunicar seus insights de dados.",
      url: "https://www.canva.com"
    }
  ];

  return (
    <section id="ferramentas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ferramentas Gratuitas
          </h2>
          <p className="text-lg text-gray-600">
            Conheça as ferramentas gratuitas que você pode usar para analisar dados no seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-gray-50 rounded-lg p-6 shadow-md flex items-start transition-all hover:shadow-lg">
              <ToolIcon name={tool.name} />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  aria-label={`Acessar ${tool.name}`}
                >
                  Acessar ferramenta
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
