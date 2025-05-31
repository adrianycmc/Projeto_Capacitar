import { FileText, Download } from 'lucide-react';

const Slides = () => {
  // Dados dos slides (em produção, estes viriam de uma API ou CMS)
  const materials = [
    {
      id: 1,
      title: "Introdução à Análise de Dados",
      description: "Conceitos fundamentais e terminologia básica para iniciantes.",
      type: "slide",
      fileUrl: "#" // Em produção, seria o link real para o arquivo
    },
    {
      id: 2,
      title: "Coletando Dados no seu Negócio",
      description: "Métodos simples para coletar dados relevantes no dia a dia da sua empresa.",
      type: "slide",
      fileUrl: "#"
    },
    // {
    //   id: 3,
    //   title: "Exercícios Práticos - Planilhas",
    //   description: "Atividades para praticar análise de dados usando Google Sheets.",
    //   type: "exercise",
    //   fileUrl: "#"
    // },
    // {
    //   id: 4,
    //   title: "Visualização de Dados para Iniciantes",
    //   description: "Como criar gráficos e visualizações eficazes para seu negócio.",
    //   type: "slide",
    //   fileUrl: "#"
    // },
    // {
    //   id: 5,
    //   title: "Exercícios de Interpretação de Dados",
    //   description: "Pratique a interpretação de dados reais de pequenos negócios.",
    //   type: "exercise",
    //   fileUrl: "#"
    // }
  ];

  return (
    <section id="slides" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Materiais
          </h2>
          <p className="text-lg text-gray-600">
            Materiais para download disponíveis em breve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <div key={material.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{material.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{material.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {material.type === 'slide' ? 'Apresentação' : 'Exercício'}
                  </span>
                  <a 
                    href={material.fileUrl} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    download
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Baixar PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slides;
