import { useState } from "react";
import {
  Twitter,
  Facebook,
  MessageCircle,
  Slack,
  Link as LinkIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const IntegrationPage = () => {
  const { t } = useTranslation(); // Hook para traducciones
  const [connectionLink, setConnectionLink] = useState("");

  // Redes sociales
  const socialMedia = [
    {
      id: 1,
      name: "Twitter",
      icon: <Twitter className="w-8 h-8 text-primary" />,
      description: t("socialMedia.twitterDescription"),
      connected: false,
    },
    {
      id: 2,
      name: "Facebook",
      icon: <Facebook className="w-8 h-8 text-primary" />,
      description: t("socialMedia.facebookDescription"),
      connected: false,
    },
  ];

  // Otras aplicaciones
  const otherApps = [
    {
      id: 3,
      name: "WhatsApp",
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      description: t("otherApps.whatsappDescription"),
      connected: false,
    },
    {
      id: 4,
      name: "Slack",
      icon: <Slack className="w-8 h-8 text-primary" />,
      description: t("otherApps.slackDescription"),
      connected: false,
    },
  ];

  // Función para generar un enlace de conexión
  const generateConnectionLink = () => {
    const link = `https://example.com/connect?token=${Math.random()
      .toString(36)
      .substring(2)}`;
    setConnectionLink(link);
    navigator.clipboard.writeText(link);
    alert(t("generateLinkMessage", { link }));
  };

  // Función para simular la conexión de una integración
  const connectIntegration = (integrationName: string) => {
    alert(t("connectIntegrationMessage", { integrationName }));
    // Aquí iría la lógica real de integración (por ejemplo, OAuth)
  };

  return (
    <div className="min-h-screen bg-primary-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-black">{t("integrations")}</h1>
          <button
            onClick={generateConnectionLink}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            <LinkIcon className="w-5 h-5" />
            {t("generateLink")}
          </button>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-gray-600 mb-4">
            {t("socialMediaSection")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialMedia.map((integration) => (
              <div
                key={integration.id}
                className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4 hover:shadow-md transition"
              >
                <div>{integration.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-black">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {integration.description}
                  </p>
                  <button
                    onClick={() => connectIntegration(integration.name)}
                    disabled={integration.connected}
                    className={`mt-3 px-4 py-1.5 rounded-lg text-white text-sm ${
                      integration.connected
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90"
                    } transition`}
                  >
                    {integration.connected ? t("connected") : t("connect")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Otras Aplicaciones */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-gray-600 mb-4">
            {t("otherAppsSection")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherApps.map((integration) => (
              <div
                key={integration.id}
                className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4 hover:shadow-md transition"
              >
                <div>{integration.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-black">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {integration.description}
                  </p>
                  <button
                    onClick={() => connectIntegration(integration.name)}
                    disabled={integration.connected}
                    className={`mt-3 px-4 py-1.5 rounded-lg text-white text-sm ${
                      integration.connected
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90"
                    } transition`}
                  >
                    {integration.connected ? t("connected") : t("connect")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enlace generado */}
        {connectionLink && (
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-600">
              {t("generatedLinkLabel")}{" "}
              <a
                href={connectionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {connectionLink}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationPage;
