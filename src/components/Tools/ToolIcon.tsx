import { Image } from 'lucide-react';

// Componente para ícones de ferramentas
const ToolIcon = ({ name }: { name: string }) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'google sheets':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M19.5 21q-1.875 0-3.188-1.313T15 16.5q0-1.875 1.313-3.188T19.5 12q1.875 0 3.188 1.313T24 16.5q0 1.875-1.313 3.188T19.5 21ZM3 21V3h18v6.675q-.9-.675-1.963-1.025T16.5 8.25q-3.45 0-5.85 2.4t-2.4 5.85q0 1.5.463 2.888t1.287 2.462V21H3Zm3-3h4.5v-4.5H6V18Zm0-7.5h4.5V6H6v4.5Zm7.5 0H18V6h-4.5v4.5Z" />
            </svg>
          </div>
        );
      case 'google data studio':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z" />
            </svg>
          </div>
        );
      case 'power bi desktop':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22ZM5.5 16h2v-7h-2v7Zm5.5 0h2V7h-2v9Zm5.5 0h2v-5h-2v5Z" />
            </svg>
          </div>
        );
      case 'canva':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14Zm1-2h12v-2H6v2Zm0-4h3V7H6v6Zm5 0h7V7h-7v6Z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg">
            <Image className="w-8 h-8" />
          </div>
        );
    }
  };

  return getIcon();
};

export default ToolIcon;
