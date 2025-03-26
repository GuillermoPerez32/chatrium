import { MessageSquare, Shield, Star, UserPlus } from 'lucide-react';

const WebsiteToolkitPage = () => {
  const tools = [
    {
      id: 1,
      name: 'Webchat',
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      description: 'Añade un chat en vivo a tu sitio web para interactuar con los visitantes.',
    },
    {
      id: 2,
      name: 'Age Confirmation',
      icon: <Shield className="w-8 h-8 text-green-600" />,
      description: 'Verifica la edad de los usuarios antes de permitirles acceder al contenido.',
    },
    {
      id: 3,
      name: 'Review Widget',
      icon: <Star className="w-8 h-8 text-green-600" />,
      description: 'Muestra reseñas de clientes directamente en tu página web.',
    },
    {
      id: 4,
      name: 'Signup Pop-up',
      icon: <UserPlus className="w-8 h-8 text-green-600" />,
      description: 'Captura registros con un pop-up personalizable en tu sitio.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-primary-50)] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold text-black mb-8">Website Toolkit</h1>

        {/* Cuadrícula de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg font-medium text-black">{tool.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteToolkitPage;
