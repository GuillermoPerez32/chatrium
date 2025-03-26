import { MessageSquare, Shield, Star, UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WebsiteToolkitPage = () => {
  const { t } = useTranslation(); // Hook para traducciones

  const tools = [
    {
      id: 1,
      name: t('tools.webchat.name'),
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      description: t('tools.webchat.description'),
    },
    {
      id: 2,
      name: t('tools.ageConfirmation.name'),
      icon: <Shield className="w-8 h-8 text-green-600" />,
      description: t('tools.ageConfirmation.description'),
    },
    {
      id: 3,
      name: t('tools.reviewWidget.name'),
      icon: <Star className="w-8 h-8 text-green-600" />,
      description: t('tools.reviewWidget.description'),
    },
    {
      id: 4,
      name: t('tools.signupPopup.name'),
      icon: <UserPlus className="w-8 h-8 text-green-600" />,
      description: t('tools.signupPopup.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-primary-50)] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-2xl font-bold text-black mb-8">{t('websiteToolkit')}</h1>

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
