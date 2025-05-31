import { Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Forum = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em produção, aqui seria a lógica para enviar a pergunta para um backend
    alert('Sua pergunta foi enviada com sucesso! Responderemos em breve.');
    setFormData({
      name: '',
      email: '',
      question: ''
    });
  };

  // Perguntas e respostas de exemplo (em produção, viriam de uma API ou banco de dados)
  const faqs = [
    {
      id: 1,
      name: "Maria Silva",
      question: "Preciso ter conhecimento prévio em informática para participar dos workshops?",
      answer: "Não é necessário conhecimento avançado. Nossos workshops são pensados para iniciantes, e ensinamos desde o básico. Basta ter familiaridade com uso de computador e internet."
    },
    {
      id: 2,
      name: "João Oliveira",
      question: "As ferramentas apresentadas funcionam em tablets ou apenas em computadores?",
      answer: "A maioria das ferramentas que apresentamos, como Google Sheets e Data Studio, funcionam bem em tablets. Porém, para uma experiência completa, recomendamos o uso de computadores, especialmente para o Power BI Desktop."
    },
    {
      id: 3,
      name: "Ana Costa",
      question: "Vou receber certificado ao final do curso?",
      answer: "Atualmente, não emitimos certificados de participação. Nosso foco está em oferecer conteúdos práticos e acessíveis que gerem impacto direto no seu aprendizado e nos resultados do seu negócio."
    }
  ];

  return (
    <section id="forum" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Fórum de Dúvidas e Interação
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas e compartilhe experiências com outros participantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Perguntas Frequentes</h3>
            
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="flex items-start mb-2">
                    <MessageSquare className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                    <div>
                      <p className="font-medium text-gray-800">{faq.question}</p>
                      <p className="text-sm text-gray-500 mt-1">Perguntado por {faq.name}</p>
                    </div>
                  </div>
                  <div className="pl-7 mt-3 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Envie sua Pergunta</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                  Sua pergunta
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar Pergunta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
