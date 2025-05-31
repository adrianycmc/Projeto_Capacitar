import { Calendar, Clock, Users } from 'lucide-react';
import { useState } from 'react';
import WorkshopForm from './WorkshopForm';

const Workshops = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);

  // Dados dos workshops (em produção, estes viriam de uma API ou CMS)
  const workshops = [
    {
      id: 1,
      title: "Introdução à Análise de Dados para Microempresas",
      date: "28/04/2025",
      time: "19:00 - 21:00",
      spots: 10
    },
    {
      id: 2,
      title: "Criando Dashboards no Google Sheets",
      date: "12/05/2025",
      time: "19:00 - 21:00",
      spots: 10
    },
    // {
    //   id: 3,
    //   title: "Análise de Vendas para Pequenos Comércios",
    //   date: "24/06/2025",
    //   time: "19:00 - 21:00",
    //   instructor: "Profa. Mariana Santos",
    //   spots: 30
    // },
    {
      id: 3,
      title: "Visualização de Dados para Tomada de Decisão",
      date: "26/05/2025",
      time: "19:00 - 21:00",
      spots: 10
    }
  ];

  const handleWorkshopClick = (workshopTitle: string) => {
    setSelectedWorkshop(workshopTitle);
    setShowForm(true);
    
    // Scroll para o formulário
    setTimeout(() => {
      const formElement = document.getElementById('workshop-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="workshops" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Agenda de Workshops
          </h2>
          <p className="text-lg text-gray-600">
            Participe dos nossos workshops online via Google Meet e obtenha informações importantes para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{workshop.title}</h3>
                
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{workshop.date}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{workshop.time}</span>
                </div>
                
                <div className="flex items-center mb-5">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">Vagas: {workshop.spots}</span>
                </div>
                
                {/* <p className="text-gray-600 mb-6">
                  Instrutor(a): <strong>{workshop.instructor}</strong>
                </p> */}
                
                <button 
                  onClick={() => handleWorkshopClick(workshop.title)}
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={`Inscrever-se no workshop ${workshop.title}`}
                >
                  Inscrever-se
                </button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div id="workshop-form" className="mt-12 max-w-2xl mx-auto">
            <div className="bg-blue-50 p-4 rounded-lg mb-6 text-center">
              <p className="font-medium text-blue-800">
                Você está se inscrevendo para: <span className="font-bold">{selectedWorkshop}</span>
              </p>
            </div>
            <WorkshopForm />
          </div>
        )}

        <div className="mt-12 max-w-2xl mx-auto bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Informações importantes:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Todos os workshops serão realizados via Google Meet</li>
            <li>• O link de acesso será enviado por e-mail após a inscrição</li>
            <li>• As vagas são limitadas e preenchidas por ordem de inscrição</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
