import { Play } from 'lucide-react';

const Videos = () => {
  // Dados dos vídeos (em produção, estes viriam de uma API ou CMS)
  const videos = [
    {
      id: 1,
      title: "O que é análise de dados?",
      description: "Uma introdução aos conceitos básicos de análise de dados e sua importância para negócios.",
      embedId: "uJGGOedi84E" // ID de exemplo do YouTube
    },
    {
      id: 2,
      title: "Como usar o Google Sheets",
      description: "Aprenda a criar gráficos simples e eficazes para visualizar seus dados de vendas e clientes.",
      embedId: "ZsQEWyipvNs" // ID de exemplo do YouTube
    },
    {
      id: 3,
      title: "Análise de tendências de mercado",
      description: "Descubra como identificar tendências de mercado para tomar decisões mais informadas.",
      embedId: "M1ynHvSiLtw" // ID de exemplo do YouTube
    },
    {
      id: 4,
      title: "Dashboards interativos para seu negócio",
      description: "Como criar painéis de controle visuais para monitorar os principais indicadores do seu negócio.",
      embedId: "v8RxLCzn7CM" // ID de exemplo do YouTube
    }
  ];

  return (
    <section id="videos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Vídeos Explicativos e Tutoriais
          </h2>
          <p className="text-lg text-gray-600">
            Aprenda no seu próprio ritmo com nossos vídeos educativos sobre análise de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <div className="relative pb-[56.25%] bg-gray-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
                <a 
                  href={`https://www.youtube.com/watch?v=${video.embedId}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Play className="h-4 w-4 mr-1" />
                  Assistir em tela cheia
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
