import { useState } from "react";
import {
  Twitter,
  Facebook,
  MessageCircle,
  Slack,
  Link as LinkIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

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
      connected: true,
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
      connected: true,
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
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-8">
          <Button onClick={generateConnectionLink} className=" ml-auto">
            <LinkIcon className="w-5 h-5" />
            {t("generateLink")}
          </Button>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-muted-foreground mb-4">
            {t("socialMediaSection")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialMedia.map((integration) => (
              <div
                key={integration.id}
                className="bg-card rounded-lg shadow-sm p-4 flex items-start gap-4 hover:shadow-md transition"
              >
                <div>{integration.icon}</div>
                <div className="flex flex-col w-full">
                  <h3 className="text-lg font-medium">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {integration.description}
                  </p>
                  <Button
                    onClick={() => connectIntegration(integration.name)}
                    disabled={integration.connected}
                    className="self-end mt-8"
                  >
                    {integration.connected ? t("connected") : t("connect")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Otras Aplicaciones */}
        <div className="mb-10">
          <h2 className="text-xl font-medium text-muted-foreground mb-4">
            {t("otherAppsSection")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherApps.map((integration) => (
              <div
                key={integration.id}
                className="bg-card rounded-lg shadow-sm p-4 flex items-start gap-4 hover:shadow-md transition"
              >
                <div>{integration.icon}</div>
                <div className="flex flex-col w-full">
                  <h3 className="text-lg font-medium">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {integration.description}
                  </p>
                  <Button
                    onClick={() => connectIntegration(integration.name)}
                    disabled={integration.connected}
                    className="self-end mt-8"
                  >
                    {integration.connected ? t("connected") : t("connect")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enlace generado */}
        {connectionLink && (
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-muted-foreground">
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
